
import styles from "./page.styles";
import type {Education} from "./types/education"
import type { Experience } from "./types/experience";
import type { Project } from "./types/project";
import type { Skills } from "./types/skills";
import type { Profile } from "./types/profile";
import ResumeEducationSection from "./sections/education";
import ResumeSkillsSection from "./sections/skills";
import ResumeExperienceSection from "./sections/experience";
import ResumeProjectsSection from "./sections/projects";
import ResumeProfileSection from "./sections/profile";
import {useEffect, useState } from "react";





export default function Page({data, parentRef} : {data : any, parentRef : React.RefObject<HTMLDivElement | null>}) {



  const [scale, setScale] = useState(1);


    //optional chaining
    const profile : Profile = data?.profile ?? {}
    const education : Education[] = data?.education ?? []
    const experiences : Experience[] = data?.experience ?? []
    const projects : Project[] = data?.projects ?? []
    const skills : Skills = data?.skills ?? {} 



  useEffect(() => {
    if (!parentRef.current) return;

    const parent = parentRef.current;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;

        // Example: scale relative to base size (800x600)
        const scaleX = width / 612;
        const scaleY = height / 791;
        setScale(Math.min(scaleX, scaleY));
      }
    });

    observer.observe(parent);

    return () => observer.disconnect();
  }, []);









  return (
    <div style={{ ...styles.container, transform: `scale(${scale})` }}>
      {/* Header */}
        <ResumeProfileSection profile={profile}></ResumeProfileSection>

      {/* Education */}
        <ResumeEducationSection educations={education}></ResumeEducationSection>

      {/* Experience */}
        <ResumeExperienceSection experiences={experiences}></ResumeExperienceSection>

      {/* Projects */}
        <ResumeProjectsSection projects={projects}></ResumeProjectsSection>

      {/* Skills */}
        <ResumeSkillsSection skills={skills}></ResumeSkillsSection>
    </div>
  );
}

