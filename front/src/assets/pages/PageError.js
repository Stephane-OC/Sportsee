import { Link } from "react-router-dom"

/* Error component provides a user-friendly error message for situations where a page is not found. **
**                                                                                                  **
** Main purpose of this component is to display a 404 error message, indicating that                **
** requested page does not exist.                                                                   **
**                                                                                                  **
** Component uses "Link" component from "react-router-dom" to provide a navigational link           **
** back to home page. This ensures that users can easily navigate back to a known location          **
** after encountering an error.                                                                     **
**                                                                                                  **
** Within component, a <div> with class 'error' is used to encapsulate the content.                 **
** It contains an <h1> element displaying the error code, an <h2> element with a descriptive        **
** message, and a <p> element containing the link back to the home page.                            */


function Error(){
    return(
        <div className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
        </div>
    )
}
export default Error