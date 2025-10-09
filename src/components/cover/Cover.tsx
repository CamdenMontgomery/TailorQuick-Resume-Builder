import { AbsoluteCenter, Center, Heading, HStack, ProgressCircle, VStack, Text, Flex, Tag, Button } from "@chakra-ui/react";
import "./Cover.css"


export default function ResumePreviewCover() {
    return (
        <Center className="resume-preview-cover">
        <HStack className="resume-preview-modal">
            <Center>
                
            </Center>
            <VStack className="resume-preview-sidepanel">

                <Heading className="resume-preview-title">Resume Generation Successful</Heading>
                <HStack className="resume-preview-stats">
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

                <VStack className="resume-preview-improvements">
                    <Heading className="resume-preview-subtitle">Possible Improvements</Heading>
                    <Text className="resume-preview-instruction">Add the following to your transcript for a better score</Text>

                    <Flex className="resume-preview-keywords">
                        <Tag.Root><Tag.Label>Placeholder</Tag.Label></Tag.Root>
                    </Flex>
                </VStack>

                <Button className="resume-preview-update-button" variant='outline'>Update Transcript</Button>

            </VStack>
        </HStack>
        </Center>
    )
}