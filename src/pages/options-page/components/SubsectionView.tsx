import {  Stack } from "@chakra-ui/react"
import SubsectionHeader from "./SubsectionHeader"
import SubsectionFooter from "./SubsectionFooter"
import { useSelector } from "react-redux"
import type TQTranscript from "../../../shared/interfaces/TQTranscript"
import FadeScroll from "./FadeScroll"
import type { SectionType } from "../../../shared/types/SectionType"
import EducationSubsection from "../subsections/EducationSubsection"
import type Education from "../../../shared/interfaces/Education"
import ExperienceSubsection from "../subsections/ExperienceSubsection"

import ProjectsSubsection from "../subsections/ProjectsSubsection"
import type Project from "../../../shared/interfaces/Project"
import ProfileSubsection from "../subsections/ProfileSubsection"
import type Profile from "../../../shared/interfaces/Profile"
import type Experience from "../../../shared/interfaces/Experience"
import SkillsSubsection from "../subsections/SkillsSubsection"



/*const SubsectionComponents = {
    "EDUCATION" : EducationSubsection,
    "EXPERIENCE" : ExperienceSubsection,
    "PROFILE" : EducationSubsection,
    "SKILLS" : EducationSubsection,
    "PROJECTS" : EducationSubsection
}*/

export default function SubsectionView({section} : {section : SectionType}){
    //const SubsectionComponent = SubsectionComponents[section]
    const data = useSelector((state : TQTranscript) => {
        switch (section){
            case "EDUCATION":
                return state.education
            case "EXPERIENCE":
                return state.experience
            case "PROJECTS":
                return state.projects
            case "PROFILE":
                return state.profile 
            case "SKILLS":
                return state.skills 
            default:
                return state.profile
        }
    })
    
    return (
        <Stack id="subsection-view" direction="column" height="100%" gap="0" background="#f9f9f9" >
            { section == "EDUCATION" || section == "EXPERIENCE" || section == "PROJECTS" && <SubsectionHeader section={section} data={data as (Education[] | Experience[] | Project[])}></SubsectionHeader> /*Remove Header if not displaying multiple subsections*/}
            <FadeScroll flex="1">

            
            {(section == "EDUCATION" || section == "EXPERIENCE" || section == "PROJECTS") && /*Conditional Render*/ <Stack id="subsection-list" direction="column">
                {
                    section == "EDUCATION" ? (data! as Education[]).map((d,idx) => <EducationSubsection data={d as Education} index={idx}></EducationSubsection>)  :
                    section == "EXPERIENCE" ? (data! as Experience[]).map((d,idx) => <ExperienceSubsection data={d as Experience} index={idx}></ExperienceSubsection>) :
                    section == "PROJECTS" ? (data! as Project[]).map((d,idx) => <ProjectsSubsection data={d as Project} index={idx}></ProjectsSubsection>)  : 
                    <></>
                }
            </Stack>}

            {
                section == "PROFILE" ? <ProfileSubsection data={data as Profile}></ProfileSubsection>  :
                section == "SKILLS" ? <SkillsSubsection data={data as string[]}></SkillsSubsection> :
                <></>
            }
        

            </FadeScroll>
            { (section == "EDUCATION" || section == "EXPERIENCE" || section == "PROJECTS") && <SubsectionFooter section={section}></SubsectionFooter> /*Remove Footer if not displaying multiple subsections*/} 
        </Stack>
    )
}