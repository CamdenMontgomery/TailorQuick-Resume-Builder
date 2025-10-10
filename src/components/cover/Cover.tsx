import { AbsoluteCenter, Center, Heading, HStack, ProgressCircle, VStack, Text, Flex, Tag, Button, Spinner } from "@chakra-ui/react";
import "./Cover.css"
import ResumePreview from "./ResumePreview";
import { useEffect, useState } from "react";
import type { IResume } from "../../interfaces/IResume";
//import type { ResumePreviewMessageTypes } from "../../types/ResumePreviewMessageTypes";
import type { ResumePreviewModes } from "../../types/ResumePreviewModes";


export default function ResumePreviewCover() {
    const [resume, setResume] = useState<IResume | undefined>(undefined)
    const [mode, setMode] = useState<ResumePreviewModes>('HIDDEN')
    const [loadingMessage, setLoadingMessage] = useState<string>('')

    useEffect(() => {

        // Event listener
        function handleMessages(message: MessageEvent) {


            switch (message.data.type) {
                case 'NOTIFY_STORAGE_LOAD_START': {
                    setMode('LOADING')
                    setLoadingMessage('Loading Your Information...');
                    break;
                }
                case 'NOTIFY_RESUME_GENERATE_START': {
                    setMode('LOADING')
                    setLoadingMessage('Generating Your Tailored Resume...');
                    break;
                }
                case 'ERROR': { break; }
                case 'PASS_RESUME': { 
                    setMode('PREVIEW')
                    setResume(message.data.payload);
                    break
                }
            }

            return false;
        }

        window.onmessage = handleMessages;


    }, [])

    return (
        mode != 'HIDDEN' && <Center className="resume-preview-cover">

            {mode == "LOADING" && <Center className="resume-preview-loading-container">
                <VStack>
                    <Spinner borderWidth='6px' color="orange" size='lg' />
                    <Text className="resume-preview-loading-message" color="black">{loadingMessage}</Text>
                    <Text className="resume-preview-loading-subtext">This may take up to a minute, please be patient</Text>
                </VStack>
            </Center>}

            {mode == "PREVIEW" &&

                <HStack className="resume-preview-modal">
                    <Center className="resume-preview-container">
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
            }
        </Center>
    )
}