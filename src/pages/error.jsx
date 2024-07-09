import { Link } from 'react-router-dom';


/**
 * Composant Error - Représente la page d'erreur 404 de l'application SportSee.
 * 
 * Ce composant affiche la page d'erreur 404 lorsque l'utilisateur accède à une URL inexistante.
 * Il affiche un message d'erreur et un lien pour retourner à la page d'accueil.
 * Le titre de la page est mis à jour avec "SportSee - Error 404".
 * 

 */


function Error() {
  

  //titre de la page
  const pageTitle = 'Error 404';
  document.title = `SportSee - ${pageTitle}`;
  const errorText = `Oups! La page que vous demandez n'existe pas.`;
  const linkText = "Retourner à la page d'accueil";

  return (
    
    <div className="error-page">
        <h1>#404</h1>
        <p>{errorText}</p>
        <Link to={'/'}><p>{linkText}</p></Link>
    </div> 
  )
}

export default Error;