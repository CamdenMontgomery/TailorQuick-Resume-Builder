import { Stack, Heading, Grid, GridItem, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import type Profile from "../../interfaces/Profile";

export default function ProfileSubsection({ data }: { data: Profile }) {

    const dispatch = useDispatch()
    const editField = (type: string, value: any) => {
        dispatch({ type: type, payload: { value: value } })
    }

    return (
        <Stack className="subsectionitem" margin="3rem">

            <Heading fontFamily='WorkSans' textAlign='justify' color='black'>Profile</Heading>

            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="1rem" alignItems="end">

                <GridItem>
                    <Field label="First Name" background="white" color="gray" required>
                        <Input placeholder="Camden" value={data.firstName} onChange={(e) => editField("EDIT_PROFILE_FIRST_NAME", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Last Name" background="white" color="gray" required>
                        <Input placeholder="Montgomery" value={data.lastName} onChange={(e) => editField("EDIT_PROFILE_LAST_NAME", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Email" background="white" color="gray" required>
                        <Input placeholder="Camden.montgomery730@gmail.com" value={data.email} onChange={(e) => editField("EDIT_PROFILE_EMAIL", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Phone" background="white" color="gray" required>
                        <Input placeholder="(000)-000-0000" value={data.phone} onChange={(e) => editField("EDIT_PROFILE_PHONE", e.target.value)} />
                    </Field>
                </GridItem>


                <GridItem>
                    <Field label="Linkedin" background="white" color="gray">
                        <Input placeholder="linkedin/in/camdenmontgomery" value={data.linkedin} onChange={(e) => editField("EDIT_PROFILE_LINKEDIN", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Github" background="white" color="gray">
                        <Input placeholder="github.io/camden-montgomery" value={data.github} onChange={(e) => editField("EDIT_PROFILE_GITHUB", e.target.value)} />
                    </Field>
                </GridItem>

                <GridItem>
                    <Field label="Portfolio Website" background="white" color="gray">
                        <Input placeholder="github.pages/camden-montgomery" value={data.portfolio} onChange={(e) => editField("EDIT_PROFILE_PORTFOLIO", e.target.value)} />
                    </Field>
                </GridItem>

            </Grid>
        </Stack>
    )
}