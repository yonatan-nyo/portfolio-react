import { BiGhost } from "react-icons/bi";
import ArrowButton from "../../components/ArrowButton";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full text-center lg:text-left pt-24 pb-16 flex flex-col justify-center items-center px-2">
      <h1 className="not-found">
        4
        <span>
          <div className="fas fa-ghost">
            <BiGhost size={180} />
          </div>
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
      <NavLink to="/" className="pt-4">
        <ArrowButton buttonText="Home" isSmall={true} />
      </NavLink>
    </div>
  );
};

export default NotFound;
