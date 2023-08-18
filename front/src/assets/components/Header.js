import logo from '../img/logo-sportsee.png'


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