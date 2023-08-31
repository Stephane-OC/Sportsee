import React from 'react';

/* PieStats component is designed to render a placeholder for a PieChart visualization.       **
**                                                                                            **
** Component expects to receive a prop named 'id', which has a default value of 'defaultId'.  **
** This 'id' can be used in future to fetch or differentiate data for PieChart.               **
**                                                                                            **
** Within component, a <div> with class 'chartPie' is used to encapsulate content.            **
** It starts with a <p> element displaying word "Score", followed by another <p> element      **
** indicating where PieChart will be placed.                                                  */

function PieStats(props) {
  return (
    <div className='chartPie'>
      <p>Score</p>
      {/* Emplacement pour le graphique PieChart */}
      <p>Emplacement pour PieChart</p>
    </div>
  );
}

PieStats.defaultProps = {
    id: 'defaultId'
};

export default PieStats;