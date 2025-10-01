import { Button, Flex, Heading, Highlight, Text, Stack, HStack, VStack, Image } from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function WelcomeModal() {
    return (
        <VStack bgImage="url(../assets/splash.png)" bgColor="white" height="100%" backgroundSize="cover" backgroundPosition="right" backgroundRepeat="no-repeat" padding="3rem">
            <HStack width="100%" padding="2rem" gap="6rem">
                <Heading fontSize="1.5rem">TailorQuick</Heading>
                <Button color="black" variant="plain" gap="0.5rem">
                    Example <FaExternalLinkAlt />
                </Button>
                <Button color="black" variant="plain"  gap="0.5rem">
                    Source Code <FaExternalLinkAlt />
                </Button>
                <Button color="black" variant="plain"  gap="0.5rem">
                    About <FaExternalLinkAlt />
                </Button>
            </HStack>
            <Stack direction={{ base: "column", md: "row" }} height="calc(100% - 8rem)" alignItems="center">
                <Flex direction="column" padding={8} gap="30px" width="auto">
                    <Heading>
                        <Highlight query="TAILORED RESUMES" styles={{ px: "0.5", color: "#FD7C4A" }}>TAILORED RESUMES At The Push Of A Button.</Highlight>
                    </Heading>
                    <Text fontSize="md" color="fg.muted">TailorQuick is a tool to help you tailor your resume to any provided job descriptiong. But tailor quick isnt like other resume customizers. Unlike other cstomizers that lean on AI to write personalized teext that can comse off as inhuman or just incorrect, tailor quik only leverages ai to make decision on what information YOU provide has to stay and go. You provided the pieces and we will decide how to solve the puzzle of job description alignment.</Text>
                    <Text>Begin Tailoring Now</Text>
                    <Button bg="#FD7C4A" color="white">Begin Setup</Button>
                </Flex>
                <Image src="../assets/hero.png" width="60vw"></Image>
            </Stack>
        </VStack>
    )
}