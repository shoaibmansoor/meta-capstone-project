import "./NotFound.css";
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
  return (
    <main className="container page-not-found" aria-labelledby="notfound-heading">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" aria-hidden="true" />
      <h1 id="notfound-heading">Page not found</h1>
      <p>The page you’re looking for doesn’t exist or is under construction.</p>
      <p><a href="/#home">Return to Home</a></p>
    </main>
  );
};

export default NotFound;
