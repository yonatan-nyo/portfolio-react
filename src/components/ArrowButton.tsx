const ArrowButton = ({ buttonText = "", isSmall = false }) => {
  return (
    <button className="resume" style={isSmall ? { paddingTop: "0.5rem", paddingBottom: "0.5rem" } : {}}>
      {buttonText}
      <div className="arrow-wrapper">
        <div className="arrow"></div>
      </div>
    </button>
  );
};

export default ArrowButton;
