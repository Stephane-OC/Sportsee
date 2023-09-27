import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import getData from "../service/MockedService";

/* BarStats component is designed to render a BarChart visualization for activity data.  **
**                                                                                       **
** Component expects to receive a prop named 'id' which is used to fetch relevant data   **
** for BarChart from 'MockedService'.                                                    **
**                                                                                       **
** Component uses React's useState and useEffect hooks to manage its local state and     **
** side effects respectively.'id' prop is used as a dependency for useEffect hook        **
** to ensure that data fetching logic is executed whenever 'id' changes.                 **
**                                                                                       **
** If data fetching is successful, component processes data to match                     **
** expected format for BarChart. Processed data is then used to render                   **
** BarChart visualization within a ResponsiveContainer.                                  **
**                                                                                       **
** In case of any errors during data fetching, component displays an error message       **
**                                                                                       **
** Main visual elements of component include:                                            **
** - A BarChart wrapped inside a ResponsiveContainer for responsive design.              **
** - CartesianGrid, XAxis, YAxis, Tooltip, Legend, and Bar elements from 'recharts'      **
**   library to construct BarChart.                                                      **
** - A custom tooltip (CustomTooltip) to display kilogram and calorie data.              **
**                                                                                       **
** Component also defines PropTypes to ensure that expected 'id' prop is provided        */

function BarStats({ id }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const call = new getData();
    call
      .getData(id, "activity")
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("An error occurred", err);
        setErrorMessage(
          "Une erreur est survenue lors de la récupération des données."
        );
      });
  }, [id]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const currentDay = (date) => date.split("-")[2];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bar-marker">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kcal`}</p>
        </div>
      );
    }
  };

  return (
    !isLoading && (
      <div className="barchart">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" strokeDasharray="3" />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="day"
              tickFormatter={currentDay}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              orientation="left"
              dataKey="calories"
              hide={true}
            />
            <YAxis
              yAxisId="right"
              axisLine={false}
              tickLine={false}
              orientation="right"
              dataKey="kilogram"
            />
            <Tooltip content={CustomTooltip} />
            <Legend
              verticalAlign="top"
              align="right"
              height={70}
              iconType="circle"
            />
            <Bar
              yAxisId="right"
              barSize={7}
              radius={[10, 10, 0, 0]}
              dataKey="kilogram"
              fill="#282D30"
              name="Poids (kg)" // Added custom name for the legend label (Weight in kg)
            />
            <Bar
              yAxisId="left"
              barSize={7}
              radius={[10, 10, 0, 0]}
              dataKey="calories"
              fill="#E60000"
              name="Calories brûlées (kCal)" // Added custom name for the legend label (Burned Calories in kCal)
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

BarStats.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BarStats;
