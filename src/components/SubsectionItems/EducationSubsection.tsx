import { Stack, Button, Heading, Grid, GridItem, createListCollection, Input, type MenuSelectionDetails, Flex } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "../ui/select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import EditableBulletedList from "../ui/EditableBullets";
import type Education from "../../interfaces/Education";
//import {RxCross1} from "react-icons/rx"
import { FaTrash } from "react-icons/fa";
import RemoveDialog from "../RemoveDialog";
export default function EducationSubsection({data, index} : {data : Education,index : number}) {

    const dispatch = useDispatch()
    const editField = (type : string, value: any) => {
        dispatch({type: type, payload: { index: index, value: value }})
    }

    const remove = () => {
        dispatch({type: "REMOVE_EDUCATION", payload: {index: index}})
    }

    const collection = createListCollection({
        items: [
            { value: "Associate of Arts", label: "Associate of Arts" },
            { value: "Bachelor of Science", label: "Bachelor of Science" },
            { value: "Master", label: "Master" },
        ],
    })
    return (
        <Stack className="subsectionitem" >

            

            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Education {index}</Heading>
                <RemoveDialog callback={remove}><Button width="fit-content"><FaTrash /></Button></RemoveDialog>
                
            </Flex>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="1rem" alignItems="end">

                <GridItem colSpan={2}>
                    <Field label="School" background="white" color="gray" required>
                        <Input placeholder="Florida International University" value={data.school} onChange={ (e) => editField("EDIT_EDUCATION_SCHOOL", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Degree" background="white" color="gray" required>
                    <SelectRoot collection={collection} onSelect={ (selection : MenuSelectionDetails) => editField("EDIT_EDUCATION_DEGREE", selection.value)}>
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
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Field" background="white" color="gray" required>
                        <Input placeholder="Commputer Science" value={data.field} onChange={ (e) => editField("EDIT_EDUCATION_FIELD", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <DatePicker onChange={ (date) => editField("EDIT_EDUCATION_START_DATE", date)} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

                <GridItem>
                    <DatePicker onChange={ (date) => editField("EDIT_EDUCATION_END_DATE", date)} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997" />
                </GridItem>

            </Grid>
            <EditableBulletedList bullets={data.bullets ?? []} onChange={(bullets) => { editField("EDIT_EDUCATION_BULLETS", bullets) }}></EditableBulletedList>
            
        </Stack>
    )
}