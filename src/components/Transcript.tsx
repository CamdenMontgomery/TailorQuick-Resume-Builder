import { Em, Flex, Grid, GridItem, Heading, List, ListItem, Text, Separator, Alert } from "@chakra-ui/react";
import type TQTranscript from "../interfaces/TQTranscript";
import type Education from "../interfaces/Education";
import type Experience from "../interfaces/Experience";
import type Project from "../interfaces/Project";


export default function Transcript({ information }: { information: TQTranscript }) {
    return (
        <Flex className="transcript-container">
            <Flex className="transcript-profile-container transcript-section">
                { !information.profile.firstName ? <Heading color="gray">Your Name</Heading> : <Heading>{information.profile.firstName} {information.profile.lastName}</Heading>}
                <Em>{information.profile.email}</Em>
            </Flex>
            <Flex className="transcript-education-container transcript-section">
                <Heading>Education</Heading>
                <Separator />
                {information.education.length == 0 ? (<Text color="gray">No Education</Text>) :
                    information.education.map((ed: Education) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-education-type">{ed.degree} in {ed.field}</Text> </GridItem> <GridItem> <Text className="transcript-education-date">{ed.startDate?.toDateString()} - {ed.endDate?.toDateString()}</Text> </GridItem>
                            <GridItem colSpan={2}> <Text className="transcript-education-school">{ed.school}</Text> </GridItem>
                            <List.Root>
                                {
                                    ed.bullets?.map((bullet: string) => (
                                        <ListItem>{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-experience-container transcript-section">
                <Heading>Experience</Heading>
                <Separator />
                {information.experience.length == 0 ? (<>
                    <Text color="gray">No Experience Provided</Text>
                    <Alert.Root status="info">
                        <Alert.Indicator />
                        <Alert.Title>
                            This section will not be visible on any derived resumes.
                        </Alert.Title>
                    </Alert.Root></>
                ) :
                    information.experience.map((ex: Experience) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-experience-type">{ex.position}</Text> </GridItem> <GridItem> <Text className="transcript-experience-date">{ex.startDate?.toDateString()} - {ex.endDate?.toDateString()}</Text> </GridItem>
                            <GridItem colSpan={2}> <Text className="transcript-experience-school">{ex.company}</Text> </GridItem>
                            <List.Root>
                                {
                                    ex.bullets?.map((bullet: string) => (
                                        <ListItem>{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-projects-container transcript-section">
                <Heading>Projects</Heading>
                <Separator />
                {information.projects.length == 0 ? (<Text color="gray">No Projects</Text>) :
                    information.projects.map((pr: Project) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-projects-title">{pr.title}</Text> </GridItem> <GridItem> <Text className="transcript-projects-date">{pr.startDate?.toDateString()} - {pr.endDate?.toDateString()}</Text> </GridItem>
                            <List.Root>
                                {
                                    pr.bullets?.map((bullet: string) => (
                                        <ListItem>{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-skills-container transcript-section">
                <Heading>Skills</Heading>
                <Separator />
            </Flex>
        </Flex>
    )
}