import { useEffect, useState } from "react";
import styles from "../../styles/Projects.module.scss";
import CardProject from "../CardProject";
import { Project, Projects } from "../../data/projects/projectInfo";
import Bouncer from "../Bouncer";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchedData = async () => {
      const data: Projects = (await import("../../data/projects/projectInfo"))
        .default;
      setProjects(data.projects);
      setLoading(false);
    };
    setTimeout(() => {
      fetchedData();
    }, 2000);
  }, []);
  return (
    <div className={styles["project-grid"]}>
      {loading ? (
        <Bouncer />
      ) : (
        <>
          {projects?.map((project, index) => {
            return (
              <CardProject
                key={index}
                image={project.thumbnail}
                title={project.title}
                description={project.shortDesc}
                alt={project.title}
                link={project.link}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProjectGrid;
