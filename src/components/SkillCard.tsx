const SkillCard = ({ skillName = "", skillImgUrl = "" }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-[103%] ease-in duration-300 max-w-full min-w-fit sm:min-w-[270px] bg-[#fbfbfb]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <img src={skillImgUrl} className="w-[76px] h-[76px] object-contain" alt="/" />
        </div>
        <div className="hidden sm:flex flex-col items-center justify-center">
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
