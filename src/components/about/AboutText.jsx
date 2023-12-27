import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./about.css";

const TEXTS = ["Frontend", "MERN stack", "JavaScript", "React", "Full stack"];

const AboutText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="text-white">
        <div>
          <h1 className="text-4xl capitalize flex gap-2">
            I'm expert as
            <TextTransition
              springConfig={presets.wobbly}
              delay={200}
              className="transition-text"
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            developer
          </h1>
          <p className="my-4">
            Hello! I'm Rakibul Hasan, a passionate MERN Stack developer with a
            strong foundation in building robust web applications. I thrive on
            turning innovative ideas into functional, user-centric products that
            provide seamless experiences. <br /> In my development approach, I
            prioritize clean, efficient code and maintainable architecture while
            staying attuned to the latest trends. I'm adept at leveraging React
            to build interactive and dynamic user interfaces, employing Node.js
            to handle server-side logic, and utilizing MongoDB to create
            scalable and efficient databases. <br /> 
            Outside of coding, I'm passionate about continuous learning,
            exploring new technologies, and engaging with the developer
            community through sharing knowledge and insights. <br />
            Let's collaborate and transform ideas into impactful solutions
            together. Feel free to reach out for discussions, collaborations, or
            to explore how we can work together.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutText;
