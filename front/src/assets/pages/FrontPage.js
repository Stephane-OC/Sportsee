import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import BarStats from '../components/ChartBar';
import LineStats from '../components/ChartLine';
import RadarStats from '../components/ChartRadar';
import PieStats from '../components/StatsPie';

import kcal from '../img/kcal.png';
import Protein from '../img/Protein.png';
import lipids from '../img/lipids.png';
import carbs from '../img/carbs.png';

import '../pages/main.css';

import getData from "../service/MockedService";

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
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Checking ID:", id);
    if (!id) {
      console.log("Redirecting to user 12");
      navigate('/user/12');
    }
  }, [id, navigate]);

  useEffect(() => {
    const call = new getData(id);
    call.getData(id, '')
    .then(function (res){
      if (res && res.keyData) {
        setData(res);
        setIsLoading(false);
      } else {
        console.log("Data is not valid. Redirecting to error page.");
        navigate('/Error');
      }
    })
    .catch(function(err){
      console.log('An error occurred', err);
      navigate('/Error');
    });
  }, [id, navigate, isLoading]);

  console.log("Checking data:", data);

  useEffect(() => {
    if (!isLoading && (!data || !data.keyData)) {
      console.log("Data or keyData is missing. Redirecting to error page.");
      navigate('/Error');
    }
  }, [data, navigate, isLoading]);


  return (
    <>{!isLoading && (
      <div className='main'>
        <div className="dashboard">
          <div className='userLabel'>
          <h1>Bonjour {data.userInfos ? <span className="highlightName">{data.userInfos.firstName}</span> : 'Loading...'}</h1>
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
                <p>{data.keyData.calorieCount + "kcal"}<br/><span>Calories</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={Protein} alt='Proteines'/>
                <p>{data.keyData.proteinCount + "mg"}<br/><span>Proteines</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={carbs} alt='Glucides'/>
                <p>{data.keyData.carbohydrateCount + "mg"}<br/><span>Glucides</span></p>
              </article>
              <article className='nutritionInfo'>
                <img src={lipids} alt='Lipides'/>
                <p>{data.keyData.lipidCount + "mg"}<br/><span>Lipides</span></p>
              </article>
            </section>

        </main>
        </div>
      </div>
    )}</>
  );
}

export default FrontPage;