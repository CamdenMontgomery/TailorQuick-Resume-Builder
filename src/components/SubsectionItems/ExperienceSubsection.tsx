import { Stack, Heading, Grid, GridItem, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import EditableBulletedList from "../ui/EditableBullets";
import type Experience from "../../interfaces/Experience";
import { CgCalendarToday } from "react-icons/cg";


export default function ExperienceSubsection({ data, index }: { data: Experience, index: number }) {
    const dispatch = useDispatch()
    const editField = (type: string, value: any) => {
        dispatch({ type: type, payload: { index: index, value: value } })
    }
    return (
        <Stack className="subsectionitem" >

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Experience {index}</Heading>

            <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(2, 1fr)" gap="1rem" alignItems="end">

                <GridItem colSpan={2}>
                    <Field label="Position" background="white" color="gray" required>
                        <Input value={data.position} placeholder="Software Developer Intern" onChange={(e) => editField("EDIT_EXPERIENCE_POSITION", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label="Company" background="white" color="gray" required>
                        <Input value={data.company} placeholder="Sargasolutions" onChange={(e) => editField("EDIT_EXPERIENCE_COMPANY", e.target.value)} />
                    </Field>
                </GridItem>
                <GridItem>
                    <Field label="Start Date" background="white" color="gray">
                        <DatePicker value={new Date(data.startDate ?? 0).toLocaleDateString("en-US", { month: 'short', year: 'numeric' })} wrapperClassName="subsection-datepicker-wrapper" className="subsection-datepicker" showMonthYearPicker showIcon icon={<CgCalendarToday className="subsection-datepicker-icon" />} onChange={(date) => editField("EDIT_EXPERIENCE_START_DATE", date?.valueOf())} dateFormat="MMM yyyy" placeholderText="e.g Jan 1997" />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="End Date" background="white" color="gray">
                        <DatePicker value={new Date(data.endDate ?? 0).toLocaleDateString("en-US", { month: 'short', year: 'numeric' })} wrapperClassName="subsection-datepicker-wrapper" className="subsection-datepicker" showMonthYearPicker showIcon icon={<CgCalendarToday className="subsection-datepicker-icon" />} onChange={(date) => editField("EDIT_EXPERIENCE_END_DATE", date?.valueOf())} dateFormat="MMM yyyy" placeholderText="e.g Jan 1997" />
                    </Field>
                </GridItem>

            </Grid>
            <EditableBulletedList bullets={data.bullets ?? []} callback={(bullets: string[]) => { editField("EDIT_EXPERIENCE_BULLETS", bullets) }}></EditableBulletedList>
            
        </Stack>
    )
}