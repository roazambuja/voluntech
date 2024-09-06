import { ProjectInterface } from "../../../../services/project";
import { ChevronIcon, CustomPaper, ProjectTitle } from "./styles";

interface ProjectListProps {
  project: ProjectInterface;
}

function Project({ project }: ProjectListProps): JSX.Element {
  return (
    <CustomPaper>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ChevronIcon />
    </CustomPaper>
  );
}

export { Project };
