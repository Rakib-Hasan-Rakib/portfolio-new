import "./skills.css";
import "react-circular-progressbar/dist/styles.css";
import SkillProgress from "./SkillProgress";
import htmlImg from "../../assets/images/html.png";
import cssImg from "../../assets/images/css.png";
import bootstrapImg from "../../assets/images/bootstrap.png";
import tailwindImg from "../../assets/images/tailwind.png";
import jsImg from "../../assets/images/js.png";
import reactImg from "../../assets/images/react.png";
import nodeImg from "../../assets/images/nodejs.png";
import expressImg from "../../assets/images/express.png";
import mongodbImg from "../../assets/images/mongodb.png";
import firebaseImg from "../../assets/images/firebase.png";
import figmaImg from "../../assets/images/figma.png";
import githubImg from "../../assets/images/github.png";

const Skills = () => {
  const skills = [
    { name: "HTML", proficiency: 95, image: htmlImg, colorCode: "#E44D26" },
    { name: "CSS", proficiency: 85, image: cssImg, colorCode: "#214CE5" },
    { name: "JavaScript", proficiency: 80, image: jsImg, colorCode: "#F7DF1E" },
    {
      name: "Tailwind",
      proficiency: 90,
      image: tailwindImg,
      colorCode: "#38BDF8",
    },
    {
      name: "Bootstrap",
      proficiency: 80,
      image: bootstrapImg,
      colorCode: "#850AFB",
    },
    { name: "React", proficiency: 90, image: reactImg, colorCode: "#61DAFB" },
    { name: "Node", proficiency: 65, image: nodeImg, colorCode: "#3C873A" },
    {
      name: "Express",
      proficiency: 85,
      image: expressImg,
      colorCode: "#A531FF",
    },
    {
      name: "MongoDB",
      proficiency: 80,
      image: mongodbImg,
      colorCode: "#4FAA41",
    },
    {
      name: "Firebase",
      proficiency: 75,
      image: firebaseImg,
      colorCode: "#FFCB2C",
    },
    {
      name: "Git & GitHub",
      proficiency: 80,
      image: githubImg,
      colorCode: "#005bc5",
    },
    { name: "Figma", proficiency: 70, image: figmaImg, colorCode: "#F34E1E" },
  ];

  return (
    <>
      <div className="my-3" id="skills">
        <div className="section-title text-8xl uppercase font-bold py-12">
          <h1>skills</h1>
          <h1>skills</h1>
        </div>

        <div className="mb-32 skills-container grid grid-cols-5 gap-4 gap-y-10">
          {skills.map((skill, i) => (
            <SkillProgress key={i} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
