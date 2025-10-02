import { Stack, Button, Heading, Grid, GridItem, createListCollection, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "../ui/select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function EducationSubsection() {
    const collection = createListCollection({
        items: [
            { value: "option1", label: "Associate of Arts" },
            { value: "option2", label: "Bachelor of Science" },
            { value: "option3", label: "Master" },
        ],
    })
    return (
        <Stack className="subsectionitem" >

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Education 1</Heading>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="1rem" alignItems="end">

                <GridItem>
                    <Field label="School" background="white" color="gray" required>
                        <Input placeholder="Florida International University" />
                    </Field>
                </GridItem>

                <GridItem>
                    <SelectRoot collection={collection}>
                        <SelectTrigger clearable>
                            <SelectValueText placeholder="Select an option…" />
                        </SelectTrigger>
                        <SelectContent>
                            {collection.items.map((item) => (
                                <SelectItem key={item.value} item={item}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
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