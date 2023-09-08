import { NavLink } from 'react-router-dom';
import '../pages/main.css';
import { USER_MAIN_DATA } from '../../data/DataMocked';

/* FrontPage component displays a list of users, allowing navigation to each user's details.               **
**                                                                                                         ** 
** Component imports USER_MAIN_DATA set from DataMocked, which contains main user information.             **
**                                                                                                         **
** Each user is represented as a link (using NavLink component from react-router-dom).                     **
** Clicking on a user's name will navigate to user's details page.                                         **
**                                                                                                         **
** User's first name is displayed as link text, and link's destination URL is constructed using user's ID. **
** List of users is dynamically generated based on USER_MAIN_DATA set, ensuring                            */

function FrontPage() {
    return (
        <div className='choice-container'>
            {USER_MAIN_DATA.map(user => (
                <p key={user.id}>
                    <NavLink to={`/user/${user.id}`}>{user.userInfos.firstName}</NavLink>
                </p>
            ))}
        </div>
    );
}

export default FrontPage;