import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import type Project from "../../interfaces/Project";

export default function ResumePreviewProjectsSection({projects} : {projects : Project[]}){
    return (
        <Flex className="resume-section">
                        <Heading className="resume-section-heading">Projects</Heading>
                        <Separator />
                        {
                            projects.map((pr: Project) => (
                                <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                                    <GridItem> <Text className="resume-subsection-title">{pr.title}</Text> </GridItem> <GridItem> <Text className="resume-subsection-date">{pr.startDate?.toDateString()} - {pr.endDate?.toDateString()}</Text> </GridItem>
                                    <List.Root>
                                        {
                                            pr.bullets?.map((bullet: string) => (
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