type ProjectsProps = {
    title: string;
    description: string;
};

const Project = ({title, description}: ProjectsProps) => {
    return (
        <div className="project-card">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Project;
