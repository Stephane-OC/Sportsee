import React from 'react';

/* BarStats component is designed to render a placeholder for a BarChart visualization.      **
**                                                                                           **
** Component expects to receive a prop named 'id', which has a default value of 'defaultId'. **
** This 'id' can be used in future to fetch or differentiate data for BarChart.              **
**                                                                                           **
** Within component, a <div> with class 'chartbar' is used to encapsulate content.           **
** It contains a <p> element indicating where BarChart will be placed.                       */

function BarStats(props) {
  return (
    <div className='chartbar'>
      {/* Emplacement pour le graphique BarChart */}
      <p>Emplacement pour BarChart</p>
    </div>
  );
}

BarStats.defaultProps = {
    id: 'defaultId'
};

export default BarStats;