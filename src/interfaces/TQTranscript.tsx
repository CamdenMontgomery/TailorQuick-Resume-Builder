
import type Education from "./Education"
import type Experience from "./Experience"
import type Project from "./Project"

export default interface TQTranscript {
    profile? : {
        first_name : String
    },
    education: Education[],
    experience: Experience[],
    projects: Project[],
    skills: string[]
}