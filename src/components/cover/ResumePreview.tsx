import { Flex, Heading, Em, HStack } from "@chakra-ui/react";
import type { IResume } from "../../interfaces/IResume";
import ResumePreviewEducationSection from "./ResumePreviewEducationSection";
import ResumePreviewExperienceSection from "./ResumePreviewExperienceSection";
import ResumePreviewProjectsSection from "./ResumePreviewProjectsSection";
import { useEffect, useRef, useState } from "react";
import type Education from "../../interfaces/Education";
import type Experience from "../../interfaces/Experience";
import type Project from "../../interfaces/Project";
import html2pdf from "html2pdf.js"


export default function ResumePreview({ resume }: { resume: IResume }) {
    const [scale, setScale] = useState(1)
    const selfRef = useRef<HTMLDivElement>(null)
    const previewRef = useRef<HTMLDivElement>(null)

    const export2PDF = (filename: string) => {

        // Configure options (optional)
        const options = {
            margin: 10,
            filename: filename,
            image: { type: 'jpeg' as const, quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
        };

        // Convert and save the PDF
        if (previewRef.current)
        html2pdf().from(previewRef.current).set(options).save();
    }



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


        //Listen to any message to export
        //const ctrl = new AbortController()
        window.onmessage = (message: MessageEvent) => {
            if (message.data.type == "REQUEST_EXPORT_RESUME")
                export2PDF(`${resume.profile.firstName.trim()}_${resume.profile.lastName.trim()}_resume.pdf`)
        }

        return () => {observer.disconnect()}

    }, [])


    return (
        <Flex className="resume-page" ref={selfRef}>
            <Flex className="resume-container" scale={scale} ref={previewRef}>


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