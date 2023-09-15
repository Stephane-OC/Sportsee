import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import getData from '../service/MockedService'

/* RadarStats component is designed to render a RadarChart visualization for performance data.  **
**                                                                                              **
** Component expects to receive a prop named 'id' which is used to fetch relevant data          **
** for RadarChart from 'MockedService'.                                                         **
**                                                                                              **
** Component uses React's useState and useEffect hooks to manage its local state and            **
** side effects respectively.'id' prop is used as a dependency for useEffect hook               **
** to ensure that data fetching logic is executed whenever'id' changes.                         **
**                                                                                              **
** If data fetching is successful, component processes data to match                            **
** expected format for RadarChart. Processed data is then used to render                        **
** RadarChart visualization within a ResponsiveContainer.                                       **
**                                                                                              **
** In case of any errors during data fetching, component displays an error message              **
** Main visual elements of component include:                                                   **
** - A RadarChart wrapped inside a ResponsiveContainer for responsive design.                   **
** - PolarGrid, PolarAngleAxis, and Radar elements from 'recharts' library to construct         **
**   RadarChart.                                                                                **
**                                                                                              **
** Component also defines PropTypes to ensure that expected 'id' prop is provided               **
** when component is used elsewhere in application.                                             */


function RadarStats({ id }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const call = new getData();
    call.getData(id, 'performance')
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('An error occurred', err);
        setErrorMessage('Une erreur est survenue lors de la récupération des données.');
      });
  }, [id]); 

  if (errorMessage) {
    return <div>{errorMessage}</div>; 
  }

  let processedData = {};
  if (!isLoading) {
    const kind = Object.values(data.kind);
    processedData = data.data.map((item, index) => ({ ...item, kind: kind[index] }));
  }

  return (
    !isLoading && (
      <div className='chartradar'>
        <ResponsiveContainer width="100%" aspect={1}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={processedData}>
            <PolarGrid />
            <PolarAngleAxis style={{ fontSize: '11px' }} dataKey='kind' />
            <Radar dataKey='value' stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

RadarStats.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RadarStats;