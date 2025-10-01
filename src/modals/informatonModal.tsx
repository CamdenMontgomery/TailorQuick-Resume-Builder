import { AbsoluteCenter, Box, Button, ButtonGroup, Steps } from "@chakra-ui/react"
import ProfileStep from "../steps/profileStep"


export default function InformationModal() {
    return (
        <AbsoluteCenter>
        <Steps.Root defaultStep={0} count={steps.length}>
            <Steps.List>
                {steps.map((step, index) => (
                    <Steps.Item key={index} index={index} title={step.title}>
                        <Steps.Indicator />
                        <Box>
                            <Steps.Title>{step.title}</Steps.Title>
                            <Steps.Description>{step.description}</Steps.Description>
                        </Box>
                        <Steps.Separator />
                    </Steps.Item>
                ))}
            </Steps.List>

            {steps.map((step, index) => (
                <Steps.Content key={index} index={index}>
                    <step.content/>
                </Steps.Content>
            ))}
            <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
                <Steps.PrevTrigger asChild>
                    <Button>Prev</Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                    <Button>Next</Button>
                </Steps.NextTrigger>
            </ButtonGroup>
        </Steps.Root>
        </AbsoluteCenter>
    )
}


const steps = [
    {
        title: "Step 1",
        content: ProfileStep,
        description: "Profile",
    }
]