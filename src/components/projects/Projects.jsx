import projects from "../../../public/projects/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div className="section-title text-6xl lg:text-8xl uppercase font-bold pb-4">
          <h1>projects</h1>
          <h1>projects</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 xl:gap-10">
          {projects?.map((project, i) => {
            return <Project key={i} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
