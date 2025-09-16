//import { useState } from "react";
import EducationSection from "../sections/educationSection";
import SideBarSectionLink from "../components/SidebarSectionLink";
import { useRef } from "react";
import ExperienceSection from "../sections/experienceSection";
import Note from "../components/note";
import ProjectsSection from "../sections/projectsSection";
import ResumePreview from "../resume-preview/resumePreview";


export default function Webpage() {
    //const [jd, setJd] = useState("");
    const educationSectionRef = useRef<HTMLDivElement>(null)
    const experienceSectionRef = useRef<HTMLDivElement>(null)
    const projectsSectionRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <ResumePreview></ResumePreview>

            <div style={styles.optionsContainer}>
                <div style={styles.optionsSidebar}>
                    <SideBarSectionLink title="Education" color="#ff6c0087" section={educationSectionRef}>1</SideBarSectionLink>
                    <SideBarSectionLink title="Experience" color="rgb(0 147 94 / 64%)" section={experienceSectionRef}>2</SideBarSectionLink>
                    <SideBarSectionLink title="Projects" color="rgb(0 147 94 / 64%)" section={projectsSectionRef}>3</SideBarSectionLink>
                </div>
                <div style={styles.optionsContent}>
                    <Note text="Sections Left Empty Will Not Contribute To Final Selection."></Note>
                    <EducationSection ref={educationSectionRef}></EducationSection>
                    <ExperienceSection ref={experienceSectionRef}></ExperienceSection>
                    <ProjectsSection ref={projectsSectionRef}></ProjectsSection>
                </div>

 
            </div>
        </>
    );
}


const styles = {
    optionsContainer: {
        boxShadow: "rgba(0, 0, 0, 0.11) 0px 0px 12px 3px",
        width: "min(1000px, 100% - 100px)",
        borderRadius: "10px",
        background: "white",
        display: "flex",
        flexDirection: "row" as const,
        paddingLeft: "0",
        maxHeight: "800px",
        overflow: "hidden"
    },
    optionsContent: {
        width: "-webkit-fill-available",
        padding: "50px",
        overflowY: "scroll" as const
    },
    optionsSidebar: {
        width: "100px", boxShadow: "#0000000d 2px 0 4px 0"
    },
    note:{

    }

}