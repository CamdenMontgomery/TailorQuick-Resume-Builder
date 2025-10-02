import {  Stack } from "@chakra-ui/react"
import SubsectionHeader from "./SubsectionHeader"
import SubsectionFooter from "./SubsectionFooter"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"
import FadeScroll from "./wrappers/scroll"
import type { SectionType } from "../types/SectionType"
import EducationSubsection from "./SubsectionItems/EducationSubsection"
import type Education from "../interfaces/Education"



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
            case "PROFILE":
                return state.profile 
            default:
                return state.profile
        }
    })
    
    return (
        <Stack id="subsectionview" direction="column" height="100%" gap="0" background="white">
            <SubsectionHeader></SubsectionHeader>
            <FadeScroll flex="1">

            
            {Array.isArray(data) && /*Conditional Render*/ <Stack id="subsectionlist" gap="0" direction="column">
                {
                    section == "EDUCATION" ? data!.map((d,idx) => <EducationSubsection data={d as Education} index={idx}></EducationSubsection>)  :
                    section == "EXPERIENCE" ?<></> :
                    section == "PROJECTS" ? <></>  : 
                    <></>
                }
            </Stack>}

            {
                section == "PROFILE" ? <></>  :
                section == "SKILLS" ? <></> :
                <></>
            }
        

            </FadeScroll>
            <SubsectionFooter section={section}></SubsectionFooter>
        </Stack>
    )
}