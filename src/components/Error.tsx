import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
        alt="Sprite of Snorlax"
      />
      <div className="error-message">
        Oh no! This page doesn't exist.
      </div>
      <Link
        to={'/'}
      >
        <div>
          Go back to the home page
        </div>
      </Link>
    </div>
  )
}

export default Error;
