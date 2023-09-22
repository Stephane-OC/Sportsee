import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import getData from '../service/ApiService';

/* LineStats component is designed to render a LineChart visualization for average session durations. **
**                                                                                                    **
** Component expects to receive a prop named 'id' which is used to fetch relevant data                **
** for LineChart from 'MockedService'.                                                                **
**                                                                                                    **
** Component uses React's useState and useEffect hooks to manage its local state and                  **
** side effects respectively. 'id' prop is used as a dependency for useEffect hook                    **
** to ensure that data fetching logic is executed whenever 'id' changes.                              **
**                                                                                                    **
** If data fetching is successful, component processes data to match                                  **
** expected format for LineChart. Processed data is then used to render                               **
** LineChart visualization within a ResponsiveContainer.                                              **
**                                                                                                    **
** In case of any errors during data fetching, component displays an error message                    **
**                                                                                                    **
** Main visual elements of component include:                                                         **
** - A LineChart wrapped inside a ResponsiveContainer for responsive design.                          **
** - XAxis, Tooltip, and Line elements from 'recharts' library to construct LineChart.                **
** - A custom tooltip (CustomTooltip) to display session duration in minutes.                         **
**                                                                                                    **
** Component also defines PropTypes to ensure that expected 'id' prop is provided                     **
** when component is used elsewhere in application.                                                   */

const days = ["L", "M", "M", "J", "V", "S", "D"];

function LineStats({ id }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const call = new getData();
        const response = await call.getData(id, "average-sessions");
        response.sessions.forEach(
          (session, index) => (session.day = days[index])
        );
        setData(response);
        setIsLoading(false);
      } catch (err) {
        console.log("An error occurred", err);
        setErrorMessage(
          "Une erreur est survenue lors de la récupération des données."
        );
      }
    };

    fetchData();
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return <div className="line-label">{`${payload[0].value} min`}</div>;
    }
  };

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      {!isLoading && (
        <div className="linechart">
          <p className="description">Durée moyenne des sessions</p>
          <ResponsiveContainer width="100%" height="60%" aspect={1.8}>
            <LineChart width={500} data={data.sessions}>
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey="day"
                stroke="#FFFFFF"
                style={{ opacity: 0.6 }}
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Line
                type="basis"
                dataKey="sessionLength"
                strokeWidth={3}
                stroke="#FFFFFF"
                style={{ opacity: 0.6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

LineStats.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LineStats;
