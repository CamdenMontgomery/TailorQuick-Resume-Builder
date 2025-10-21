import type Experience from "./Experience";
import type Project from "./Project";
import type Education from "./Education";
import type Profile from "./Profile";

export interface IResume{
    profile: Profile,
    sections: (
        {type: "EDUCATION", data: Education[]}  | 
        {type: "EXPERIENCE", data: Experience[]} | 
        {type: "PROJECTS", data: Project[]}    | 
        {type: "SKILLS", data: SkillGroup[] }
    )[]
}

export interface SkillGroup{
    label: string, 
    skills: string[]
}