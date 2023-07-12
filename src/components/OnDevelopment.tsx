import { NavLink } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const OnDevelopment = () => {
  return (
    <>
      <div className="planet" />
      <p className="font-bold">Sorry!</p>
      <p className="font-bold tracking-wide text-2xl">Still on Development..</p>
      <NavLink to="/">
        <ArrowButton buttonText="Home" isSmall={true} />
      </NavLink>
    </>
  );
};

export default OnDevelopment;
