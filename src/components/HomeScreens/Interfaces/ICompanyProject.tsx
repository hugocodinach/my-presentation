import ITechnology from "./ITechnology";

interface ICompanyProject {
    name: string;
    company: string;
    logo?: string;
    description: string;
    technologies: ITechnology[];
}

export default ICompanyProject;