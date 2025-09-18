//import { useState } from "react";
import EducationSection from "../sections/educationSection";
import SideBarSectionLink from "../components/SidebarSectionLink";
import { useEffect, useRef } from "react";
import ExperienceSection from "../sections/experienceSection";
import Note from "../components/note";
import ProjectsSection from "../sections/projectsSection";
import ResumePreview from "../resume-preview/resumePreview";
import SkillsSection from "../sections/skillsSection";
import ProfileSection from "../sections/profileSection";


export default function Webpage() {
    //const [previewData, setPreviewData] = useState({})

    //const [jd, setJd] = useState("");
    const profileSectionRef = useRef<HTMLDivElement>(null)
    const educationSectionRef = useRef<HTMLDivElement>(null)
    const experienceSectionRef = useRef<HTMLDivElement>(null)
    const projectsSectionRef = useRef<HTMLDivElement>(null)
    const skillsSectionRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const loop = setInterval(() => {
            /*
                        let path: string[] = []
                        let count = 10
                        while (count > 0)
                        {
                            let current = previewData as any
                            for (const key of path){
                                current = current[key]
                            }
                            const keys = Object.keys(current)
            
                        }
            */
        }, 1000)

        return () => { clearInterval(loop) }
    }, [])

    return (
        <>


            <div style={styles.optionsContainer}>
                <div style={styles.optionsSidebar}>
                    <SideBarSectionLink title="Profile" color="rgb(147 0 40 / 64%)" section={profileSectionRef}>!</SideBarSectionLink>
                    <SideBarSectionLink title="Education" color="#ff6c0087" section={educationSectionRef}>1</SideBarSectionLink>
                    <SideBarSectionLink title="Experience" color="rgb(0 147 94 / 64%)" section={experienceSectionRef}>2</SideBarSectionLink>
                    <SideBarSectionLink title="Projects" color="rgb(0 112 147 / 64%)" section={projectsSectionRef}>3</SideBarSectionLink>
                    <SideBarSectionLink title="Skills" color="rgb(31 0 147 / 64%)" section={skillsSectionRef}>4</SideBarSectionLink>

                </div>
                <div style={styles.optionsContent}>

                    <div style={styles.header}>TailorQuick</div>

                    <ProfileSection ref={profileSectionRef}></ProfileSection>
                    <Note text="Sections Left Empty Will Not Contribute To Final Selection."></Note>
                    <EducationSection ref={educationSectionRef}></EducationSection>
                    <ExperienceSection ref={experienceSectionRef}></ExperienceSection>
                    <ProjectsSection ref={projectsSectionRef}></ProjectsSection>
                    <SkillsSection ref={skillsSectionRef}></SkillsSection>
                </div>

                
            </div>
            <ResumePreview data={{}}></ResumePreview>
        </>
    );
}


const styles = {
    optionsContainer: {
        boxShadow: "rgba(0, 0, 0, 0.11) 0px 0px 12px 3px",
        //width: "min(1000px, 100% - 100px)",
        //borderRadius: "10px",
        background: "white",
        display: "flex",
        flexDirection: "row" as const,
        paddingLeft: "0",
        //maxHeight: "800px",
        overflow: "hidden",
        width: "100%",
        height: "100%"
    },
    optionsContent: {
        width: "-webkit-fill-available",
        padding: "50px",
        overflowY: "scroll" as const
    },
    optionsSidebar: {
        width: "100px", boxShadow: "#0000000d 2px 0 4px 0"
    },
    note: {

    },
    header: {
          color: "white",
  fontSize: "xx-large" as const,

  padding: "20px",
  borderRadius: "3px",
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  letterSpacing: "13px",
  textTransform: "uppercase" as const,
  boxShadow: "#000000 0px 5px 3px 0px",
  background: "linear-gradient(45deg, black, #000000e3)"
    }

}