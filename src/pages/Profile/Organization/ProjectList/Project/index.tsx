import { useNavigate } from "react-router-dom";
import { ProjectInterface } from "../../../../../services/project";
import { ChevronIcon, CustomPaper, ProjectTitle } from "./styles";

interface ProjectListProps {
  project: ProjectInterface;
}

function Project({ project }: ProjectListProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <CustomPaper onClick={() => navigate(`/projeto/${project._id}`)}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ChevronIcon />
    </CustomPaper>
  );
}

export { Project };
