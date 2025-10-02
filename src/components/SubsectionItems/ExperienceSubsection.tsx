import { Stack, Button, Heading, Grid, GridItem, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

export default function ExperienceSubsection({index} : {index : number}) {
    const dispatch = useDispatch()
    const editField = (type : string, value: any) => {
        dispatch({type: type, payload: { index: index, value: value }})
    }
    return (
        <Stack className="subsectionitem" >

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Experience {index}</Heading>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap="1rem" alignItems="end">

                <GridItem colSpan={2}>
                    <Field label="Position" background="white" color="gray" required>
                        <Input placeholder="Software Developer Intern" onChange={ (e) => editField("EDIT_EXPERIENCE_POSITION", e.target.value)}/>
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label="Company" background="white" color="gray" required>
                        <Input placeholder="Sargasolutions" onChange={ (e) => editField("EDIT_EXPERIENCE_COMPANY", e.target.value)}/>
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