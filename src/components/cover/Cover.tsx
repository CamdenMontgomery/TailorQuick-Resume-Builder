import { Center, Heading, HStack, VStack, Text, Flex, Button, Spinner, FormatNumber, Progress, Stat, Badge, ListItem, ListRoot } from "@chakra-ui/react";
import "./Cover.css"
import ResumePreview from "./ResumePreview";
import { useEffect, useState } from "react";
import type { IResume } from "../../interfaces/IResume";
//import type { ResumePreviewMessageTypes } from "../../types/ResumePreviewMessageTypes";
import type { ResumePreviewModes } from "../../types/ResumePreviewModes";
import { RxCross2 } from "react-icons/rx";


const RATINGS = {
    0: { badge: "Poor", text: "You are not qualified for this job", color: "red"},
    0.4: { badge: "Okay", text: "You are a below average candidate for this job", color: "orange"},
    0.6: { badge: "Good", text: "You are qualified for this job", color: "green"},
    0.8: { badge: "Great", text: "You are an above average candidate for this job", color: "yellow"},
}

function getRatingInformation(score: number){
    const stops = Object.keys(RATINGS).map((n) => Number(n))
    console.log(stops)
    for (let i = 0; i < stops.length; i++){
        if ( i + 1 >= stops.length || stops[i + 1] > score )
            return RATINGS[stops[i] as keyof typeof RATINGS] 
    }
}


export default function ResumePreviewCover() {
    const [resume, setResume] = useState<IResume | undefined>(undefined)
    const [highlights, setHighlights] = useState<string[] | undefined>(undefined)
    const [score, setScore] = useState<number>(0)
    const [suggestions, setSuggestions] = useState<string[]>([])
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
                case 'PASS_RESUME_DATA': {
                    setMode('PREVIEW')
                    setResume(message.data.payload.resume);
                    setScore(message.data.payload.info.relevance);
                    setSuggestions(message.data.payload.info.suggestions);
                    setHighlights(message.data.payload.metadata.highlights)
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
                        <VStack gap="2rem" height="100%">
                        {resume && <ResumePreview resume={resume} highlights={highlights}></ResumePreview>}
                        <Button background="black" color="white" width="100%" height="2.5rem" onClick={() => window.postMessage({type:"REQUEST_EXPORT_RESUME"})}>Export</Button>
                        </VStack>
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
                                        <FormatNumber value={score} style="percent" />
                                    </Stat.ValueText>
                                    <Badge colorPalette={getRatingInformation(score)?.color} gap="0">
                                        {getRatingInformation(score)?.badge}
                                    </Badge>
                                </HStack>
                                <Stat.HelpText color="gray" mb="2">{getRatingInformation(score)?.text}</Stat.HelpText>
                                <Progress.Root colorPalette={getRatingInformation(score)?.color} value={score * 100} striped animated>
                                    <Progress.Track background="#f9f9f9">
                                        <Progress.Range/>
                                    </Progress.Track>
                                </Progress.Root>
                            </Stat.Root>
                        </HStack>

                        <VStack className="resume-preview-modal-improvements">
                            <Heading className="resume-preview-modal-subtitle">Possible Improvements</Heading>
                            <Text className="resume-preview-modal-subtext">Add the following to your transcript for a better score</Text>

                            <Flex className="resume-preview-modal-keywords">
                                <ListRoot gap="0.2rem">
                                    { suggestions.map((suggestion) => <ListItem fontSize="0.7rem">{suggestion}</ListItem> )}
                                </ListRoot>
                            </Flex>
                        </VStack>

                        <Button className="resume-preview-modal-button" variant='outline'>Update Transcript</Button>

                    </VStack>
                </HStack>
            }
        </Center>
    )
}