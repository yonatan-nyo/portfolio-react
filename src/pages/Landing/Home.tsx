import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full text-center lg:text-left pt-12 flex justify-center items-center px-2">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-600">LET&apos;S BUILD SOMETHING TOGETHER</p>
        <h1 className="py-4 text-[35px] sm:text-[50px] leading-[30px] sm:leading-[60px] text-gray-700">
          Hi, I&apos;m <span className="text-[#5651e5]">Yonatan</span>
        </h1>
        <h2 className="py-4 text-[33px] sm:text-[50px] leading-[30px] sm:leading-[60px] text-gray-700">
          Fullstack Web Developer
        </h2>
        <p className="max-w-[70%] mx-auto lg:mx-0 py-4 text-[16px] sm:text-[22px] text-gray-600">
          I&apos;m focused on building responsive front-end web applications integrating with high performance back-end
          technologies.
        </p>
        <div className="flex max-w-[250px] mx-auto lg:mx-0 items-center justify-between py-4">
          <a href="https://www.linkedin.com/in/yonatan-njoto" target="_blank" rel="noreferrer">
            <div className="ease in cursor-pointer rounded-full p-5 shadow-lg shadow-gray-400 duration-300 hover:scale-110 bg-[#fafafa]">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://github.com/yonatan-nyo" target="_blank" rel="noreferrer">
            <div className="ease in cursor-pointer rounded-full p-5 shadow-lg shadow-gray-400 duration-300 hover:scale-110 bg-[#fafafa]">
              <FaGithub />
            </div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yonatan.njoto@gmail.com" target="_blank" rel="noreferrer">
            <div className="ease in cursor-pointer rounded-full p-5 shadow-lg shadow-gray-400 duration-300 hover:scale-110 bg-[#fafafa]">
              <HiOutlineMail />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden lg:block flex-shrink-0">
        <img src="/Yonatan-illustration.png" className="h-[80vh] w-auto object-contain yonatan-illustration" alt="" />
      </div>
    </section>
  );
};

export default Home;
