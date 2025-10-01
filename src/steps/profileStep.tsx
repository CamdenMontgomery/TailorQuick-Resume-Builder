import { VStack, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Field } from "../components/ui/field"

export default function ProfileStep() {
    return (<VStack>
        <Heading>Let's Get To Know You</Heading>
        <Text>Provide your legal name, phone number, and email address</Text>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
            <GridItem> <Field label="First Name" helperText="John" required/> </GridItem>
            <GridItem> <Field label="Last Name" helperText="Doe" required/> </GridItem>
        </Grid>
    </VStack>)
}