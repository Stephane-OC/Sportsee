import { useParams } from 'react-router-dom';

import kcal from '../img/kcal.png';
import Protein from '../img/Protein.png';
import lipids from '../img/lipids.png';
import carbs from '../img/carbs.png';

import '../main.css';
import BarStats from '../components/ChartBar';
import LineStats from '../components/ChartLine';
import RadarStats from '../components/ChartRadar';
import PieStats from '../components/StatsPie';

/* FrontPage component serves as main dashboard for displaying various statistics and information. **
**                                                                                                 **
** Component uses "useParams" hook from "react-router-dom" to extract "id" parameter               **
** from URL. This "id" is then passed as a prop to various child components to fetch and display   **
** relevant data.                                                                                  **
**                                                                                                 **
** Within component, a <div> with class 'main' encapsulates entire dashboard.                      **
** Dashboard consists of a user greeting section, a main section for displaying charts, and a      **
** nutrition rating section.                                                                       **
**                                                                                                 **
** User greeting section displays a welcome message to user, with a placeholder for                **
** user's first name.                                                                              **
**                                                                                                 **
** Main section contains a series of charts (BarStats, LineStats, RadarStats, and PieStats)        **
** that display various statistics. Each of these chart components receives "id" prop to fetch     **
** and display data specific to user.                                                              **
**                                                                                                 **
** Nutrition rating section displays icons and labels for different nutritional elements           **
** (Calories, Proteins, Carbs, and Lipids). Each of these elements is represented by an <img>      **
** element with a corresponding label.                                                             */

function FrontPage() {
    const {id} = useParams();

  return (
      <div className='main'>
        <div className="dashboard">
          <div className='userLabel'>
            <h1>Bonjour <span className="highlightName">Prénom</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <main>
          <section className="scoreBox">
            <BarStats id={id}/>
            <article className='statsBox'>
              <LineStats id={id}/>
              <RadarStats id={id}/>
              <PieStats id={id}/>
            </article>
          </section>
            <section className='nutritionRating'>
              
              <article className='nutritionInfo'>
                <img src={kcal} alt='Calories'/>
                <p>Calories<br/><span>Calories</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={Protein} alt='Proteines'/>
                <p>Proteines<br/><span>Proteines</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={carbs} alt='Glucides'/>
                <p>Glucides<br/><span>Glucides</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={lipids} alt='Lipides'/>
                <p>Lipides<br/><span>Lipides</span></p>
              </article>
            </section>

        </main>
        </div>
      </div>
  );
}

export default FrontPage;