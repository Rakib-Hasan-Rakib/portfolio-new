import { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
// import image from '../../assets/images/Banner-one.png'

const SkillProgress = ({ skill }) => {
  const [proficient, setProficient] = useState(0);
  const { name, proficiency, image, colorCode } = skill;

  useEffect(() => {
    const duration = 800;
    const increment = proficiency / duration;

    const interval = setInterval(() => {
      if (proficient < proficiency) {
        setProficient((prevValue) => prevValue + increment);
      } else {
        clearInterval(interval);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [proficient, proficiency]);

  return (
    <>
      <div className="w-28 md:w-36 lg:w-40 2xl:w-52 space-y-2">
        <CircularProgressbarWithChildren
          value={Math.floor(proficient)}
          strokeWidth={10}
          styles={{
            path: {
              stroke: `${colorCode}`,
            },
            trail: {
              stroke: "#fff",
            },
            background: { stroke: "transparent" },
          }}
        >
          <img src={image} alt="skills icon" className="w-8 md:w-12" />
          <p
            style={{ color: `${colorCode}` }}
            className="md:text-xl lg:text-2xl"
          >{`${Math.floor(proficient)}%`}</p>
        </CircularProgressbarWithChildren>
        <p
          style={{ color: `${colorCode}` }}
          className="text-center md:text-lg lg:text-2xl font-bold"
        >
          {name}
        </p>
      </div>
    </>
  );
};
export default SkillProgress;
