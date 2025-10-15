import { Flex, Heading, Separator, Grid, GridItem, List, ListItem, Text, Highlight } from "@chakra-ui/react";
import type Project from "../../interfaces/Project";

export default function ResumePreviewProjectsSection({ projects, highlights }: { projects: Project[], highlights?: string[] }) {

    const DATE_FORMAT = { month: 'short' as const, year: 'numeric' as const }
    const formatDate = (date: number | null /*Unix*/) => {
        if (!date) return null
        return new Date(date).toLocaleDateString('en-US', DATE_FORMAT)
    }

    return (<>
        { projects.length != 0 && <Flex className="resume-section">
            <Heading className="resume-section-heading">Projects</Heading>
            <Separator />
            {
                projects.map((pr: Project) => (
                    <Grid className="resume-subsection-grid">
                        <GridItem> <Text className="resume-subsection-title">{pr.title}</Text> </GridItem>
                        <GridItem>
                            {
                                (pr.startDate && pr.endDate) && //If both start and end date exist, show date range 
                                <Text className="resume-subsection-date">
                                    {
                                        pr.startDate == pr.endDate ? formatDate(pr.endDate) :    //If both end and start are the same just show one
                                        `${formatDate(pr.startDate)} - ${formatDate(pr.endDate)}`
                                            
                                    }
                                </Text>
                            }
                        </GridItem>
                        <GridItem className="resume-subsection-span-2">
                            <List.Root className="resume-subsection-bullet-list">
                                {
                                    pr.bullets?.map((bullet: string) => (
                                        <ListItem className="resume-subsection-bullet">
                                            <Highlight ignoreCase query={highlights ?? ""} styles={{ fontWeight: "semibold" }}>{bullet}</Highlight>
                                        </ListItem>
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