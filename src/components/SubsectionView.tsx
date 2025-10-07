import {  Stack } from "@chakra-ui/react"
import SubsectionHeader from "./SubsectionHeader"
import SubsectionFooter from "./SubsectionFooter"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"
import FadeScroll from "./wrappers/scroll"
import type { SectionType } from "../types/SectionType"
import EducationSubsection from "./SubsectionItems/EducationSubsection"
import type Education from "../interfaces/Education"
import ExperienceSubsection from "./SubsectionItems/ExperienceSubsection"
import type { Experience } from "../resume-preview/types/experience"
import ProjectsSubsection from "./SubsectionItems/ProjectsSubsection"
import type Project from "../interfaces/Project"
import ProfileSubsection from "./SubsectionItems/ProfileSubsection"
import type Profile from "../interfaces/Profile"



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
            default:
                return state.profile
        }
    })
    
    return (
        <Stack id="subsection-view" direction="column" height="100%" gap="0" background="#f9f9f9" >
            <SubsectionHeader></SubsectionHeader>
            <FadeScroll flex="1">

            
            {Array.isArray(data) && /*Conditional Render*/ <Stack id="subsection-list" direction="column">
                {
                    section == "EDUCATION" ? data!.map((d,idx) => <EducationSubsection data={d as Education} index={idx}></EducationSubsection>)  :
                    section == "EXPERIENCE" ? data!.map((d,idx) => <ExperienceSubsection data={d as Experience} index={idx}></ExperienceSubsection>) :
                    section == "PROJECTS" ? data!.map((d,idx) => <ProjectsSubsection data={d as Project} index={idx}></ProjectsSubsection>)  : 
                    <></>
                }
            </Stack>}

            {
                section == "PROFILE" ? <ProfileSubsection data={data as Profile}></ProfileSubsection>  :
                section == "SKILLS" ? <></> :
                <></>
            }
        

            </FadeScroll>
            <SubsectionFooter section={section}></SubsectionFooter>
        </Stack>
    )
}