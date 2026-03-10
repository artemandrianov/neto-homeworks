import type { Project } from '../types/types'

interface ProjectListProps {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} />
      ))}
    </div>
  )
}

export default ProjectList