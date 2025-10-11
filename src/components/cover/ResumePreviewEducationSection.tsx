import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import type Education from "../../interfaces/Education";

export default function ResumePreviewEducationSection({ educations }: { educations: Education[] }) {

    const DATE_FORMAT = {month: 'short' as const, year: 'numeric' as const}
    const formatDate = (date: number | null /*Unix*/) => {
        if (!date) return null
        return new Date(date).toLocaleDateString('en-US',DATE_FORMAT)
    }

    return (
        <>{ educations.length != 0 && <Flex className="resume-section">

            <Heading className="resume-section-heading">Education</Heading>
            <Separator />

            {
                educations.map((ed: Education) => (
                    <Grid templateColumns="1fr 1fr">

                        <GridItem> <Text className="resume-subsection-title">{ed.degree} {ed.field ? `in ${ed.field}` : ""} </Text> </GridItem>

                        <GridItem> 
                            {
                                (ed.startDate && ed.endDate) && //If both start and end date exist, show date range 
                                <Text className="resume-subsection-date">
                                    { 
                                        ed.startDate == ed.endDate ? formatDate(ed.endDate) :   //If both end and start are the same just show one
                                        `${formatDate(ed.startDate)} - ${formatDate(ed.endDate)}`
                                        
                                    }
                                </Text>
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
        }</>
    )
}