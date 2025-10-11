import { Flex, Heading, Em, HStack, Container } from "@chakra-ui/react";
import type { IResume } from "../../interfaces/IResume";
import ResumePreviewEducationSection from "./ResumePreviewEducationSection";
import ResumePreviewExperienceSection from "./ResumePreviewExperienceSection";
import ResumePreviewProjectsSection from "./ResumePreviewProjectsSection";
import { useEffect, useRef, useState } from "react";
import type Education from "../../interfaces/Education";
import type Experience from "../../interfaces/Experience";
import type Project from "../../interfaces/Project";
import {useReactToPrint} from "react-to-print"

export default function ResumePreview({ resume }: { resume: IResume }) {
    const [scale, setScale] = useState(1)
    const selfRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const reactToPrintFn  = useReactToPrint({contentRef})




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
            if (message.data.type == "REQUEST_EXPORT_RESUME")
                reactToPrintFn ()
        }

        return () => {observer.disconnect()}

    }, [])


    return (
        <Flex className="resume-page" ref={selfRef}>
            <Container scale={scale} transformOrigin={"top left"} padding={0}> {/*Scale the resume container without it appearing scaled in the print view because the print view doesnt know about this parent affecting its scale*/}
            <Flex className="resume-container"  ref={contentRef} padding={"3rem"}>


                <Flex className="resume-section" alignItems="center">
                    <Heading>{resume.profile.firstName.trim()} {resume.profile.lastName.trim()}</Heading>
                    <HStack>
                        <Em>{resume.profile.email}</Em> |
                        <Em>{resume.profile.phone}</Em>
                        {!!resume.profile.linkedin && <> | <a href={resume.profile.linkedin}></a></>}
                        {!!resume.profile.github && <> | <a href={resume.profile.github}></a></>}
                        {!!resume.profile.portfolio && <> | <a href={resume.profile.portfolio}></a></>}
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
            </Container>
        </Flex>
    )
}