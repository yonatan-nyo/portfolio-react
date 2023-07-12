import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full text-left pt-12 flex justify-center items-center pl-2 pr-4">
      <div className="w-full lg:flex lg:flex-row-reverse gap-8 justify-between md:gap-10">
        <div className="flex-grow justify-items-start">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4 text-4xl">Who I Am</h2>
          <p className="py-2 text-gray-600 whitespace-pre-line">
            With an enormous passion for programming ignited since high school, I have delved deep into the captivating realm of
            algorithms and competitive programming. This immersive journey has{" "}
            <strong>sharpened my problem-solving abilities and developed my curiosity to explore current world problems</strong>.
            Motivated by an unwavering commitment to continuous learning and professional growth, I eagerly enrolled in Hacktiv8
            to gain a comprehensive understanding of{" "}
            <strong>web development and explore the intricate details of system architecture.</strong>
            {"\n\n"}Backed by a proven track record of excelling in coding competitions, I am confident that my passionate
            dedication and unwavering determination to conquer new challenges will make me an invaluable asset to any team or
            project. Embracing each opportunity as a stepping stone towards excellence, I am eager to contribute my skills and
            enthusiasm to create innovative solutions that will shape the future of an industry.
          </p>
          <HashLink to="/#projects">
            <p className="pt-4 text-[#3366CC] underline cursor-pointer">Check out some of my latest projects.</p>
          </HashLink>
        </div>
        <div className="w-fit self-stretch hidden lg:flex items-center flex-shrink-0">
          <div className="flex max-w-[380px] w-fit h-fit shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300 about-illustration">
            <img
              src="/about-yonatan.png"
              className=" rounded-xl h-full w-auto object-contain"
              alt="about-yonatan"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
