import Html from "../../assets/skills/html.png";
import Css from "../../assets/skills/css.png";
import Javascript from "../../assets/skills/javascript.png";
import ReactImg from "../../assets/skills/react.png";
import Git from "../../assets/skills/git.png";
import Firebase from "../../assets/skills/firebase.png";
import NextJS from "../../assets/skills/nextjs.png";
import MongoDB from "../../assets/skills/mongodb.png";
import PostgreSQL from "../../assets/skills/postgresql.png";
import Aws from "../../assets/skills/aws.png";
import Vue from "../../assets/skills/vue.png";
import GraphQl from "../../assets/skills/graphql.png";
import GitHub from "../../assets/skills/github1.png";
import Typescript from "../../assets/skills/typescript.png";
import Apollo from "../../assets/skills/apollo.png";
import Redux from "../../assets/skills/redux.png";
import Pinia from "../../assets/skills/pinia.svg";
import Cpp from "../../assets/skills/cpp.png";
import SkillCard from "../../components/SkillCard";
import Slider from "../../components/Slider";

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:min-h-screen p-2 pt-24 pb-16 justify-center items-center">
      <div className="mx-5 justify-center text-left">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4 text-4xl">My Capabilities</h2>
        <Slider>
          <SkillCard skillName="HTML" skillImgUrl={Html} />
          <SkillCard skillName="CSS" skillImgUrl={Css} />
          <SkillCard skillName="Javascript" skillImgUrl={Javascript} />
          <SkillCard skillName="Typescript" skillImgUrl={Typescript} />
          <SkillCard skillName="Cpp" skillImgUrl={Cpp} />
          <SkillCard skillName="Git" skillImgUrl={Git} />
          <SkillCard skillName="Github" skillImgUrl={GitHub} />
        </Slider>
        <Slider>
          <SkillCard skillName="Redux" skillImgUrl={Redux} />
          <SkillCard skillName="React" skillImgUrl={ReactImg} />
          <SkillCard skillName="Pinia" skillImgUrl={Pinia} />
          <SkillCard skillName="Vue" skillImgUrl={Vue} />
          <SkillCard skillName="Next" skillImgUrl={NextJS} />
        </Slider>
        <Slider>
          <SkillCard skillName="Firebase" skillImgUrl={Firebase} />
          <SkillCard skillName="MongoDB" skillImgUrl={MongoDB} />
          <SkillCard skillName="PostgreSQL" skillImgUrl={PostgreSQL} />
          <SkillCard skillName="GraphQl" skillImgUrl={GraphQl} />
          <SkillCard skillName="Apollo" skillImgUrl={Apollo} />
          <SkillCard skillName="AWS" skillImgUrl={Aws} />
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
