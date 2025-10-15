import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import type Experience from "../../interfaces/Experience";

export default function ResumePreviewExperienceSection({ experiences }: { experiences: Experience[] }) {

    const DATE_FORMAT = { month: 'short' as const, year: 'numeric' as const }
    const formatDate = (date: number | null /*Unix*/) => {
        if (!date) return null
        return new Date(date).toLocaleDateString('en-US', DATE_FORMAT)
    }

    return (
        <>{
         experiences.length != 0 && <Flex className="resume-section">
            <Heading className="resume-section-heading">Experience</Heading>
            <Separator />
            {experiences.map((ex: Experience) => (
                <Grid className="resume-subsection-grid">
                    <GridItem> <Text className="resume-subsection-title">{ex.position == "" ? "Your Position Here" : ex.position}</Text> </GridItem>
                    <GridItem>
                        {
                            (ex.startDate && ex.endDate) && //If both start and end date exist, show date range 
                            <Text className="resume-subsection-date">
                                {
                                    ex.startDate == ex.endDate ? formatDate(ex.endDate) :    //If both end and start are the same just show one
                                    `${formatDate(ex.startDate)} - ${formatDate(ex.endDate)}`
                                        
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem className="resume-subsection-span-2"> <Text className="resume-subsection-subtitle">{ex.company == "" ? "The company you worked at here" : ex.company}</Text> </GridItem>
                    <GridItem className="resume-subsection-span-2">
                        <List.Root className="resume-subsection-bullet-list">
                            {
                                ex.bullets?.map((bullet: string) => (
                                    <ListItem className="resume-subsection-bullet">{bullet}</ListItem>
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
