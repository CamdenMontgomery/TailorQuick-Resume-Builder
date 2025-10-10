import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import type Education from "../../interfaces/Education";

export default function ResumePreviewEducationSection({ educations }: { educations: Education[] }) {
    return (
        <Flex className="resume-section">

            <Heading className="resume-section-heading">Education</Heading>
            <Separator />

            {
                educations.map((ed: Education) => (
                    <Grid templateColumns="1fr 1fr">

                        <GridItem> <Text className="resume-subsection-title">{ed.degree} {ed.field ? `in ${ed.field}` : ""} </Text> </GridItem>

                        <GridItem> 
                            {
                                (ed.startDate && ed.endDate) && //If both start and end date exist, show date range 
                                <Text className="resume-subsection-date">{new Date(ed.startDate ?? 0).toDateString()} - {new Date(ed.endDate).toDateString()}</Text>
                            }
                        </GridItem>

                        <GridItem colSpan={2}> <Text className="resume-subsection-subtitle">{ed.school}</Text> </GridItem>

                        <GridItem colSpan={2}>
                            <List.Root paddingInlineStart={"2rem"}>
                                {
                                        ed.bullets?.map((bullet: string) => (
                                            bullet != "" && <ListItem className="resume-subsection-bullet">{bullet}</ListItem>
                                        ))
                                }
                            </List.Root>
                        </GridItem>
                    </Grid>
                ))
            }
        </Flex>
    )
}