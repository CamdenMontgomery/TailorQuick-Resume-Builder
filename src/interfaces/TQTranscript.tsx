import type { Education } from "../resume-preview/types/education"
import type { Experience } from "../resume-preview/types/experience"

export default interface TQTranscript {
    profile? : {
        first_name : String
    },
    education: Education[],
    experience: Experience[],
    //projects: Project[],
    //skills: string[]
}