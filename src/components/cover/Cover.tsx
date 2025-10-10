import { Center, Heading, HStack, VStack, Text, Flex, Tag, Button, Spinner, FormatNumber, Progress, Stat, Badge } from "@chakra-ui/react";
import "./Cover.css"
import ResumePreview from "./ResumePreview";
import { useEffect, useState } from "react";
import type { IResume } from "../../interfaces/IResume";
//import type { ResumePreviewMessageTypes } from "../../types/ResumePreviewMessageTypes";
import type { ResumePreviewModes } from "../../types/ResumePreviewModes";
import { RxCross2 } from "react-icons/rx";

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
                        <Flex width="100%" justifyContent="end"><Button variant="ghost" onClick={() => {setMode('HIDDEN')}}><RxCross2 /></Button></Flex>
                        
                        
                        <Heading className="resume-preview-modal-title">Resume Generation Successful</Heading>
                        <Text className="resume-preview-modal-subtext">We've generated a resume fitting the job description based on your personalized information. Here's the results!</Text>
                        
                        <HStack className="resume-preview-modal-stats">
                            <Stat.Root className="resume-preview-stat-card" gap="1rem">
                                <Stat.Label>Relevance Score</Stat.Label>
                                <HStack gap="1rem">
                                    <Stat.ValueText fontSize="xxx-large">
                                        <FormatNumber value={0.7} style="percent" />
                                    </Stat.ValueText>
                                    <Badge colorPalette="green" gap="0">
                                        Good Candidate
                                    </Badge>
                                </HStack>
                                <Stat.HelpText color="gray" mb="2">You have an above average change of hiring</Stat.HelpText>
                                <Progress.Root value={70} striped animated>
                                    <Progress.Track background="#f9f9f9">
                                        <Progress.Range background="#a9e7c2"/>
                                    </Progress.Track>
                                </Progress.Root>
                            </Stat.Root>
                        </HStack>

                        <VStack className="resume-preview-modal-improvements">
                            <Heading className="resume-preview-modal-subtitle">Possible Improvements</Heading>
                            <Text className="resume-preview-modal-instruction">Add the following to your transcript for a better score</Text>

                            <Flex className="resume-preview-modal-keywords">
                                <Tag.Root><Tag.Label>Placeholder</Tag.Label></Tag.Root>
                            </Flex>
                        </VStack>

                        <Button className="resume-preview-modal-button" variant='outline'>Update Transcript</Button>

                    </VStack>
                </HStack>
            }
        </Center>
    )
}