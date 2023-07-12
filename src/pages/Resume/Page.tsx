import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="mx-3">
      <div className="max-w-[940px] mx-auto p-3 pt-24 pb-16">
        <h1 className="text-center text-[30px] sm:text-[45px] leading-[30px] sm:leading-[60px] text-gray-700">Resume</h1>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-xl sm:text-3xl">Yonatan Edward Njoto</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/clint-briley-50056920a/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development <span className="px-1">|</span> Complex Problem
              Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="text-center">
          Analytical, innovative, and highly motivated web developer with a proven track record of success in team leadership and
          enhancing organizational effectiveness. Thrived in fast-paced and challenging environments, excels at developing
          effective strategies and implementing streamlined operations to drive optimal results. Inspired and collaborated with
          others, fostering growth and creating a positive work culture.
        </p>

        {/* Skills */}
        <div className="text-left py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-1">
            <span className="font-bold">Overall</span>
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span> CSS
            <span className="px-2">|</span> Javascript
            <span className="px-2">|</span> Typescript
            <span className="px-2">|</span> C++
          </p>
          <p className="py-1">
            <span className="font-bold">Version Control</span>
            <span className="px-2">|</span> Git
            <span className="px-2">|</span> Github
          </p>
          <p className="py-1">
            <span className="font-bold">Front-end</span>
            <span className="px-2">|</span> React
            <span className="px-2">|</span> Next JS
            <span className="px-2">|</span> React Native
            <span className="px-2">|</span> Vue js
            <span className="px-2">|</span> Pinia
            <span className="px-2">|</span> EJS
            <span className="px-2">|</span> Redux
            <span className="px-2">|</span> Tailwind
          </p>
          <p className="py-1">
            <span className="font-bold">Back-end</span>
            <span className="px-2">|</span> Microservices
            <span className="px-2">|</span> SQL
            <span className="px-2">|</span> NoSQL
            <span className="px-2">|</span> GraphQl
            <span className="px-2">|</span> Sequelize
            <span className="px-2">|</span> Redis
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> Tailwind
            <span className="px-2">|</span> Jest
            <span className="px-2">|</span> Supertest
            <span className="px-2">|</span> Express
          </p>
          <p className="py-1">
            <span className="font-bold">Others</span>
            <span className="px-2">|</span> MVC
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> REST API
            <span className="px-2">|</span> Apollo
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        <ul className="list-disc py-6">
          <li className="py-1 text-left">
            <p className="italic">
              <span className="font-bold italic">Institut Teknologi Bandung</span>
              <span className="px-2">|</span>Bandung, Indonesia (2023 - current)
            </p>
            <p className="py-1">Faculty of Computer</p>
          </li>
          <li className="py-1 text-left">
            <p className="italic">
              <span className="font-bold italic">Hacktiv8 BSD</span>
              <span className="px-2">|</span>Tangerang Selatan, Indonesia (2023)
            </p>
            <p className="py-1">Full Stack Javascript (99.70)</p>
          </li>
          <li className="py-1 text-left">
            <p className="italic">
              <span className="font-bold italic">SMAK Penabur Gading Serpong</span>
              <span className="px-2">|</span>Tangerang Selatan, Indonesia (2020 - 2023)
            </p>
            <p className="py-1">Natural Science (94.09)</p>
          </li>
        </ul>

        <h5 className="text-center underline text-[18px] py-4">Activities</h5>

        <div className="py-6 text-left">
          <p className="italic">
            <span className="font-bold italic">Hacktiv8 BSD (Student)</span>
            <span className="px-2">|</span>Tangerang Selatan, Indonesia
          </p>
          <p className="py-1 italic">Project Manager & Fullstack (2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Created a project plan and timeline for the exploration and implementation of the new tech stack</li>
            <li>Organized a team of 4 developers in exploring and implementing a new tech stack (NextJs) within 2 weeks.</li>
          </ul>
        </div>

        <div className="py-6 text-left">
          <p className="italic">
            <span className="font-bold italic">SMAK Penabur gading Serpong (Student)</span>
            <span className="px-2">|</span>Tangerang Selatan, Indonesia
          </p>
          <p className="py-1 italic">Mentorship (2022 - 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Inspired and motivated students across various subjects covered in the school curriculum.</li>
            <li>
              Taught and guided students in challenging academic areas, fostering their understanding and helping them overcome
              obstacles, especially on science related subjects.
            </li>
            <li>
              Successfully contributed to significant academic improvements, resulting in an average score increase of 12% among
              the students under my mentorship.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
