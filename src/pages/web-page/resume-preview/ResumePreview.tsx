import { Flex, Heading, Em, HStack, Container, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print"

import ResumePreviewEducationSection from "./preview-sections/ResumePreviewEducationSection";
import ResumePreviewExperienceSection from "./preview-sections/ResumePreviewExperienceSection";
import ResumePreviewProjectsSection from "./preview-sections/ResumePreviewProjectsSection";
import ResumePreviewSkillsSection from "./preview-sections/ResumePreviewSkillsSection";

import type { IResume, SkillGroup } from "../../../shared/interfaces/IResume";
import type Education from "../../../shared/interfaces/Education";
import type Experience from "../../../shared/interfaces/Experience";
import type Project from "../../../shared/interfaces/Project";

import printStyles from "./print.css?inline"
import pageStyle from "./preview.css?inline"

export default function ResumePreview({ resume, highlights }: { resume: IResume, highlights?: string[] }) {
    const [scale, setScale] = useState(1)
    const selfRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const reactToPrintFn = useReactToPrint({ contentRef, pageStyle: pageStyle + printStyles})


    //


    useEffect(() => {

        //We want the resume preview to not be responsive but instead always scale its entirety rather than shift its contents
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                const naturalWidth = contentRef.current?.clientWidth
                const naturalHeight = contentRef.current?.clientHeight

                const scaleX = width / (naturalWidth ?? 671);
                const scaleY = height / (naturalHeight ?? 700);
                setScale(Math.min(scaleX, scaleY));
            }
        });


        if (selfRef.current) observer.observe(selfRef.current)


        //Listen to any message to export
        //const ctrl = new AbortController()
        window.onmessage = (message: MessageEvent) => {
            if (message.data.type == "REQUEST_EXPORT_RESUME") {
                reactToPrintFn()
            }

        }

        return () => { observer.disconnect() }

    }, [])


    return (
        <Flex className="resume-page" ref={selfRef}>
            <Container scale={scale} transformOrigin={"top left"} padding={0}> {/*Scale the resume container without it appearing scaled in the print view because the print view doesnt know about this parent affecting its scale*/}
                <Flex className="resume-container" ref={contentRef}>


                    <Flex className="resume-section resume-profile-section"  >
                        <Heading>{resume.profile.firstName.trim()} {resume.profile.lastName.trim()}</Heading>
                        <HStack className="resume-profile-info">
                            <Em>{resume.profile.email}</Em> |
                            <Em>{resume.profile.phone}</Em>
                            {!!resume.profile.linkedin && <> | <a href={resume.profile.linkedin}>Linkedin</a></>}
                            {!!resume.profile.github && <> | <a href={resume.profile.github}>Github</a></>}
                            {!!resume.profile.portfolio && <> | <a href={resume.profile.portfolio}>Portfolio</a></>}
                        </HStack>
                        {!!resume.profile.summary &&<Text className="resume-profile-summary">
                            {resume.profile.summary}
                        </Text>}
                    </Flex>

                    {resume.sections.map((section) => (
                        <>
                            {console.log(section)}
                            {section.type == "EDUCATION" && <ResumePreviewEducationSection educations={section.data as Education[]}></ResumePreviewEducationSection>}
                            {section.type == "EXPERIENCE" && <ResumePreviewExperienceSection experiences={section.data as Experience[]}></ResumePreviewExperienceSection>}
                            {section.type == "PROJECTS" && <ResumePreviewProjectsSection projects={section.data as Project[]} highlights={highlights}></ResumePreviewProjectsSection>}
                            {section.type == "SKILLS" && <ResumePreviewSkillsSection skillgroups={section.data as SkillGroup[]}></ResumePreviewSkillsSection>}
                        </>
                    ))}






                </Flex>
            </Container>
        </Flex>
    )
}