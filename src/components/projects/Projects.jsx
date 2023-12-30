import projects from "../../../public/projects/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id="projects" className="">
        <div className="section-title text-8xl uppercase font-bold py-12">
          <h1>projects</h1>
          <h1>projects</h1>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {projects?.map((project, i) => {
            return <Project key={i} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
