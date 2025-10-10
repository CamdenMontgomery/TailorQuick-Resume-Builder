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
import { useEffect, useRef } from "react";
import { CgCalendarToday } from "react-icons/cg";
export default function EducationSubsection({ data, index }: { data: Education, index: number }) {

    const dispatch = useDispatch()
    const editField = (type: string, value: any) => {
        dispatch({ type: type, payload: { index: index, value: value } })
    }

    const remove = () => {
        dispatch({ type: "REMOVE_EDUCATION", payload: { index: index } })
    }


    const scrollRef = useRef<HTMLDivElement>(null)
    useEffect(() => {

        const ctrl = new AbortController(); //For easy removal of listener

        window.addEventListener('scrollto', (e: CustomEventInit<{ index: number }>) => {
            if (e.detail?.index == index) scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }, ctrl)

        return () => { ctrl.abort() } //Remove listener on unmount

    }, [])

    const collection = createListCollection({
        items: [
            { value: "Associate of Arts", label: "Associate of Arts" },
            { value: "Bachelor of Science", label: "Bachelor of Science" },
            { value: "Master", label: "Master" },
        ],
    })

    return (
        <Stack className="subsectionitem" ref={scrollRef}>



            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Education {index}</Heading>
                <RemoveDialog callback={remove}><Button width="fit-content"><FaTrash /></Button></RemoveDialog>

            </Flex>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="1rem" alignItems="start">

                <GridItem colSpan={2}>
                    <Field label="School" background="white" color="gray" required>
                        <Input placeholder="Florida International University" value={data.school} onChange={(e) => editField("EDIT_EDUCATION_SCHOOL", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Degree" background="white" color="gray" required>
                        <SelectRoot collection={collection} onSelect={(selection: MenuSelectionDetails) => editField("EDIT_EDUCATION_DEGREE", selection.value)}>
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
                        <Input placeholder="Commputer Science" value={data.field} onChange={(e) => editField("EDIT_EDUCATION_FIELD", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Start Date" background="white" color="gray">
                        <DatePicker value={new Date(data.startDate ?? 0).toLocaleDateString("en-US", {month: 'short', year: 'numeric'})} wrapperClassName="subsection-datepicker-wrapper" className="subsection-datepicker" showMonthYearPicker showIcon icon={<CgCalendarToday className="subsection-datepicker-icon" />} onChange={(date) => editField("EDIT_EDUCATION_START_DATE", date?.valueOf())} dateFormat="MMM yyyy" placeholderText="e.g Jan 1997" />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="End Date" background="white" color="gray">
                        <DatePicker value={new Date(data.endDate ?? 0).toLocaleDateString("en-US", {month: 'short', year: 'numeric'})} wrapperClassName="subsection-datepicker-wrapper" className="subsection-datepicker" showMonthYearPicker showIcon icon={<CgCalendarToday className="subsection-datepicker-icon" />} onChange={(date) => editField("EDIT_EDUCATION_END_DATE", date?.valueOf())} dateFormat="MMM yyyy" placeholderText="e.g Jan 1997" />
                    </Field>
                </GridItem>

            </Grid>


            <EditableBulletedList bullets={data.bullets ?? []} callback={(bullets : string[]) => { editField("EDIT_EDUCATION_BULLETS", bullets) }}></EditableBulletedList>

        </Stack>
    )
}