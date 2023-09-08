import logo from '../../img/logo-sportsee.png'
import '../../pages/main.css'

/* Header component renders a top navigation bar with SportSee logo and a set of menu items. **
**                                                                                           **
** Header contains SportSee logo, represented by an <img> element. Source and                **
** alternative text for this image are imported and then used within the component.          **
**                                                                                           **
** Navigation menu consists of four items: Accueil, Profil, Réglage, and Communauté.         **
** These items are hard-coded within an unordered list in the component.                     */

function Header(){
    return(
        <header>
            <img src={logo} alt='logo-sportsee'/>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;