import React from 'react';

/* LineStats component is designed to render a placeholder for a LineChart visualization.    **
** Main purpose of this component is to display average session duration, as indicated by    **
** 'description' paragraph.                                                                  **
**                                                                                           **
** Component expects to receive a prop named 'id', which has a default value of 'defaultId'. **
** This 'id' can be used in future to fetch or differentiate data for LineChart.             **
**                                                                                           **
** Within component, a <div> with class 'linechart' is used to encapsulate content.          **
** It contains a <p> element with a class 'description' to describe content and another <p>  **
** element indicating where the LineChart will be placed.                                    */

function LineStats(props) {
  return (
    <div className="linechart">
      <p className='description'>Durée moyenne des sessions</p>
      {/* Emplacement pour le graphique LineChart */}
      <p>Emplacement pour LineChart</p>
    </div>
  );
}

LineStats.defaultProps  = {
    id: 'defaultId'
};

export default LineStats;