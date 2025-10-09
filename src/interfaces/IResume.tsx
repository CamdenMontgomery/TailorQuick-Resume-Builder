import type { Experience } from "../resume-preview/types/experience";
import type { Project } from "../resume-preview/types/project";
import type Education from "./Education";
import type Profile from "./Profile";

export interface IResume{
    profile: Profile,
    sections: (
        {type: "EDUCATION", data: Education[]}  | 
        {type: "EXPERIENCE", data: Experience[]} | 
        {type: "PROJECTS", data: Project[]}    | 
        {type: "SKILLS", data: string[]}
    )[]
}

