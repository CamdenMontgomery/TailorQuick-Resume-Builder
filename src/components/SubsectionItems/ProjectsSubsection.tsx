import { Stack, Button, Heading, Grid, GridItem, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import EditableBulletedList from "../ui/EditableBullets";
import type Project from "../../interfaces/Project";


export default function ProjectsSubsection({data, index} : {data : Project,index : number}) {
    const dispatch = useDispatch()
    const editField = (type : string, value: any) => {
        dispatch({type: type, payload: { index: index, value: value }})
    }
    return (
        <Stack className="subsectionitem" >

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Project {index}</Heading>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap="1rem" alignItems="end">

                <GridItem colSpan={2}>
                    <Field label="Title" background="white" color="gray" required>
                        <Input placeholder="TailorQuick - Resume Tailor" onChange={ (e) => editField("EDIT_PROJECT_TITLE", e.target.value)}/>
                    </Field>
                </GridItem>


                <GridItem>
                    <DatePicker showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

                <GridItem>
                    <DatePicker showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

            </Grid>
            <EditableBulletedList bullets={data.bullets ?? []} onChange={(bullets) => { editField("EDIT_PROJECT_BULLETS", bullets) }}></EditableBulletedList>
            <Button></Button>
        </Stack>
    )
}