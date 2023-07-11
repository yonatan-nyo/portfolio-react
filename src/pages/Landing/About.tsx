import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full text-left pt-12 flex justify-center items-center px-2">
      <div className="w-full md:flex gap-8 justify-between">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4 text-4xl">Who I Am</h2>
          <p className="py-2 text-gray-600 whitespace-pre-line max-w-[800px]">
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
        <div className="flex justify-center items-center">
          <div className="grid max-w-[420px] w-auto h-auto shadow-xl shadow-gray-400 rounded-xl place-items-center p-4 hover:scale-105 ease-in duration-300">
            <img
              src="/about-yonatan.png"
              className="rounded-xl h-full w-auto object-contain"
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
