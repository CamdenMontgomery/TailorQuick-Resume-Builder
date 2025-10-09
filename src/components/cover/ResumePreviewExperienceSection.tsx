import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import type Experience from "../../interfaces/Experience";

export default function ResumePreviewExperienceSection({ experiences }: { experiences: Experience[] }) {
    return (
        <Flex className="resume-section">
            <Heading className="resume-section-heading">Experience</Heading>
            <Separator />
                {experiences.map((ex: Experience) => (
                    <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                        <GridItem> <Text className="resume-subsection-title">{ex.position == "" ? "Your Position Here" : ex.position}</Text> </GridItem> <GridItem> <Text className="resume-subsection-date">{ex.startDate?.toDateString() ?? "Start Date"} - {ex.endDate?.toDateString() ?? "End Date"}</Text> </GridItem>
                        <GridItem colSpan={2}> <Text className="resume-subsection-subtitle">{ex.company == "" ? "The company you worked at here" : ex.company}</Text> </GridItem>
                        <List.Root>
                            {
                                ex.bullets?.map((bullet: string) => (
                                    <ListItem className="resume-subsection-bullet">{bullet}</ListItem>
                                ))
                            }
                        </List.Root>
                    </Grid>
                ))
            }
        </Flex>
    )
}
