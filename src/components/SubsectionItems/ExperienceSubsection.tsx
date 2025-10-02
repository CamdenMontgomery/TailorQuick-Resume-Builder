import { Stack, Button, Heading, Grid, GridItem, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function ExperienceSubsection() {

    return (
        <Stack className="subsectionitem" >

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Experience 1</Heading>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap="1rem" alignItems="end">

                <GridItem colSpan={2}>
                    <Field label="Title" background="white" color="gray" required>
                        <Input placeholder="Software Developer Intern" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label="Company" background="white" color="gray" required>
                        <Input placeholder="Sargasolutions" />
                    </Field>
                </GridItem>

                <GridItem>
                    <DatePicker showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

                <GridItem>
                    <DatePicker showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

            </Grid>
            <Button></Button>
        </Stack>
    )
}