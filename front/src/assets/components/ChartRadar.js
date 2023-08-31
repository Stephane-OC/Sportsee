import React from 'react';

/* RadarStats component is designed to render a placeholder for a RadarChart visualization.     **
**                                                                                              **
** Component expects to receive a prop named 'id', which has a default value of 'defaultId'.    **
** This 'id' can be used in future to fetch or differentiate data for RadarChart.               **
**                                                                                              **
** Within component, a <div> with class 'chartradar' is used to encapsulate the placeholder     **
** content, which currently consists of a <p> element indicating where the RadarChart will be.  */


function RadarStats(props) {
  return (
    <div className='chartradar'>
      {/* Emplacement pour le graphique RadarChart */}
      <p>Emplacement pour RadarChart</p>
    </div>
  );
}

RadarStats.defaultProps  = {
    id: 'defaultId'
};

export default RadarStats;