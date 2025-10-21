

import type Education from "./Education"
import type Experience from "./Experience"
import type Profile from "./Profile"
import type Project from "./Project"

export default interface TQTranscript{
    profile : Profile
    education: Education[],
    experience: Experience[],
    projects: Project[],
    skills: string[]
}