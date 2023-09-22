import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import getData from '../service/MockedService';

/* PieStats component is designed to render a PieChart visualization for score data.   **
**                                                                                     **
** Component expects to receive a prop named 'id' which is used to fetch relevant data **
** for PieChart from 'MockedService'.                                                  **
**                                                                                     **
** Component uses React's useState and useEffect hooks to manage its local state and   **
** side effects respectively. 'id' prop is used as a dependency for useEffect hook     **
** to ensure that data fetching logic is executed whenever 'id' changes.               **
**                                                                                     **
** If data fetching is successful, component processes data to match                   **
** expected format for PieChart. Processed data is then used to render                 **
** PieChart visualization within a ResponsiveContainer.                                **
**                                                                                     **
** In case of any errors during data fetching, component displays an error message     **
**                                                                                     **
** Main visual elements of component include:                                          **
** - A PieChart wrapped inside a ResponsiveContainer for responsive design.            **
** - Pie and Cell elements from 'recharts' library to construct PieChart.              **
** - A Label element to display percentage of user's objective achieved.               **
**                                                                                     **
** Component also defines PropTypes to ensure that expected 'id' prop is provided      **
** when component is used elsewhere in application.                                    */

const COLORS = ["#E60000", "#FFFFFF"];

function PieStats({ id }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const call = new getData();
        const response = await call.getData(id, "");
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

  const score = [
    { name: "start", value: Number(data.todayScore) },
    { name: "range", value: 1 },
  ];

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      {!isLoading && (
        <div className="chartPie">
          <p>Score</p>
          <ResponsiveContainer width="100%" height="60%" aspect={1}>
            <PieChart width={800} height={400}>
              <Pie
                data={score}
                cx={140}
                cy={90}
                cornerRadius={50}
                innerRadius={80}
                outerRadius={90}
                startAngle={180}
                endAngle={-360}
                paddingAngle={4}
                dataKey="value"
              >
                {score.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={score[0].value * 100 + "%  de votre objectif"}
                  position="center"
                  width={50}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

PieStats.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PieStats;
