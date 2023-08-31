import sport1 from '../../img/meditation.png'
import sport2 from '../../img/swim.png'
import sport3 from '../../img/bike.png'
import sport4 from '../../img/gym.png'
import './SideBar.css';

/* SideBar component renders a vertical sidebar with a set of icons and a copyright notice.         **
**                                                                                                  **
** Sidebar contains four icons, each represented by an <img> element. Sources and alternative texts **
** for these images are hard-coded within component.                                                **
**                                                                                                  **
** Component does not receive any props and does not maintain any internal state.                   **
** Layout and content of the sidebar are hard-coded within the component.                           */

function SideBar(){
    return(
        <aside>
            <div className='icons'>
                <img src={sport1} alt='icon-1'></img>
                <img src={sport2} alt='icon-2'></img>
                <img src={sport3} alt='icon-3'></img>
                <img src={sport4} alt='icon-4'></img>
            </div>
            <p> Copyryght, SportSee 2020 </p>
        </aside>
    )
}

export default SideBar;