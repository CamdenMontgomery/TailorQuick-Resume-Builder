import { AbsoluteCenter, Center, Heading, HStack, ProgressCircle, VStack, Text, Flex, Tag, Button } from "@chakra-ui/react";
import "./Cover.css"
import ResumePreview from "./ResumePreview";
import { useEffect, useState } from "react";
import type { IResume } from "../../interfaces/IResume";
//import type { ResumePreviewMessageTypes } from "../../types/ResumePreviewMessageTypes";
import type { ResumePreviewModes } from "../../types/ResumePreviewModes";


export default function ResumePreviewCover() {
    const [resume, setResume] = useState<IResume | undefined>(undefined)
    const [mode, setMode] = useState<ResumePreviewModes>('HIDDEN')

    useEffect(() => {

        // Event listener
        function handleMessages(message : MessageEvent) {


            switch (message.data.type){
                case 'NOTIFY_STORAGE_LOAD_START': 
                case 'NOTIFY_RESUME_GENERATE_START': setMode('LOADING'); break;
                case 'ERROR': alert(message.data.payload); break;
                case 'PASS_RESUME':  console.log(message.data.payload); setResume(message.data.payload);
            }
            
            return false;
        }

        window.onmessage = handleMessages;


    }, [])

    return (
        mode != "HIDDEN" && <Center className="resume-preview-cover">
            <HStack className="resume-preview-modal">
                <Center>
                    {resume && <ResumePreview resume={resume}></ResumePreview>}
                </Center>
                <VStack className="resume-preview-modal-sidepanel">

                    <Heading className="resume-preview-modal-title">Resume Generation Successful</Heading>
                    <HStack className="resume-preview-modal-stats">
                        <ProgressCircle.Root size='lg' value={5}>
                            <ProgressCircle.Circle>
                                <ProgressCircle.Track />
                                <ProgressCircle.Range />
                            </ProgressCircle.Circle>
                            <AbsoluteCenter>
                                <ProgressCircle.ValueText />
                            </AbsoluteCenter>
                        </ProgressCircle.Root>

                        <VStack>
                            <Heading>Job Relevance</Heading>
                            <Text>Score Passable</Text>
                        </VStack>
                    </HStack>

                    <VStack className="resume-preview-modal-improvements">
                        <Heading className="resume-preview-modal-subtitle">Possible Improvements</Heading>
                        <Text className="resume-preview-modal-instruction">Add the following to your transcript for a better score</Text>

                        <Flex className="resume-preview-modal-keywords">
                            <Tag.Root><Tag.Label>Placeholder</Tag.Label></Tag.Root>
                        </Flex>
                    </VStack>

                    <Button className="resume-preview-modal-update-button" variant='outline'>Update Transcript</Button>

                </VStack>
            </HStack>
        </Center>
    )
}