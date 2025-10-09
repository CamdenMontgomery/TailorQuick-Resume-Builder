import { Flex, Heading, Em, HStack } from "@chakra-ui/react";
import type { IResume } from "../../interfaces/IResume";
import ResumePreviewEducationSection from "./ResumePreviewEducationSection";
import ResumePreviewExperienceSection from "./ResumePreviewExperienceSection";
import ResumePreviewProjectsSection from "./ResumePreviewProjectsSection";
import { useEffect, useRef, useState } from "react";
import type Education from "../../interfaces/Education";
import type Experience from "../../interfaces/Experience";
import type Project from "../../interfaces/Project";

export default function ResumePreview({ resume }: { resume: IResume }) {
    const [scale, setScale] = useState(1)
    const selfRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        //We want the resume preview to not be responsive but instead always scale its entirety rather than shift its contents
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;

                const scaleX = width / 612;
                const scaleY = height / 791;
                setScale(Math.min(scaleX, scaleY));
            }
        });


        if (selfRef.current) observer.observe(selfRef.current)

    }, [])


    return (
        <Flex className="resume-page" ref={selfRef}>
            <Flex className="resume-container" scale={scale}>


                <Flex className="resume-section">
                    <Heading>{resume.profile.firstName}</Heading>
                    <HStack>
                        <Em>{resume.profile.email}</Em> |
                        <Em>{resume.profile.phone}</Em> |
                        {!!resume.profile.linkedin && <a href={resume.profile.linkedin}></a>} |
                        {!!resume.profile.github && <a href={resume.profile.github}></a>} |
                        {!!resume.profile.portfolio && <a href={resume.profile.portfolio}></a>} |
                    </HStack>

                </Flex>

                {resume.sections.map((section) => (
                    <>
                    {console.log(section)}
                    {section.type == "EDUCATION" && <ResumePreviewEducationSection educations={section.data as Education[]}></ResumePreviewEducationSection>}
                    {section.type == "EXPERIENCE" && <ResumePreviewExperienceSection experiences={section.data as Experience[]}></ResumePreviewExperienceSection>}
                    {section.type == "PROJECTS" && <ResumePreviewProjectsSection projects={section.data as Project[]}></ResumePreviewProjectsSection>}
                    </>
                ))}

                


            </Flex>
        </Flex>
    )
}