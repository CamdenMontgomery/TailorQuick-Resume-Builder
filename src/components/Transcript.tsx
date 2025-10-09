import { Em, Flex, Grid, GridItem, Heading, List, ListItem, Text, Separator, Alert } from "@chakra-ui/react";
import type TQTranscript from "../interfaces/TQTranscript";
import type Education from "../interfaces/Education";
import type Experience from "../interfaces/Experience";
import type Project from "../interfaces/Project";


export default function Transcript({ information }: { information: TQTranscript }) {

    const placehold = (condition : boolean, content : string | null, placeholder : string) => {
        return condition ? placeholder : content;
    }

    return (
        <Flex className="transcript-container">
            <Flex className="transcript-profile-container transcript-section">
                { !information.profile.firstName ? <Heading color="gray">Your Name</Heading> : <Heading>{information.profile.firstName} {information.profile.lastName} Transcript</Heading>}
                <Em>{information.profile.email}</Em>
            </Flex>
            <Alert.Root colorPalette="gray" status="info">
                <Alert.Indicator />
                <Alert.Title>
                    Blank sections will not be visible on your resume.
                </Alert.Title>
            </Alert.Root>
            <Flex className="transcript-section">
                <Heading className="transcript-section-heading">Education</Heading>
                <Separator />
                {information.education.length == 0 ? (<Text className="transcript-section-placeholder">No Education</Text>) :
                    information.education.map((ed: Education) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">

                            <GridItem> <Text className="transcript-subsection-title">{placehold(ed.degree == "" || ed.field == "", `${ed.degree} in ${ed.field}`, "[Your level of degree in your field of study]")} </Text> </GridItem> 
                           
                            <GridItem> <Text className="transcript-subsection-date">{placehold(!ed.startDate || !ed.endDate,`${new Date(ed.startDate ?? 0).toDateString()} - ${new Date(ed.endDate ?? 0).toDateString()}`, "[Your start date of study - Your end date of study]")}</Text> </GridItem>
                            
                            <GridItem colSpan={2}> <Text className="transcript-subsection-subtitle">{placehold(ed.school == "", `${ed.school}`,"[Your school which you attended]")}</Text> </GridItem>
                            
                            <List.Root>
                                {
                                    ed.bullets?.length == 0 || !ed.bullets ? (<ListItem>[Bulleted information of note]</ListItem>) :
                                    ed.bullets?.map((bullet: string) => (
                                        <ListItem className="transcript-subsection-bullet">{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-section">
                <Heading className="transcript-section-heading">Experience</Heading>
                <Separator />
                {information.experience.length == 0 ? (
                    <Text className="transcript-section-placeholder">No Experience Provided</Text>
                ) :
                    information.experience.map((ex: Experience) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-subsection-title">{ex.position == "" ? "Your Position Here" : ex.position}</Text> </GridItem> <GridItem> <Text className="transcript-subsection-date">{new Date(ex.startDate ?? 0).toDateString() ?? "Start Date"} - {new Date(ex.endDate ?? 0).toDateString() ?? "End Date"}</Text> </GridItem>
                            <GridItem colSpan={2}> <Text className="transcript-subsection-subtitle">{ex.company == "" ? "The company you worked at here" : ex.company}</Text> </GridItem>
                            <List.Root>
                                {
                                    ex.bullets?.map((bullet: string) => (
                                        <ListItem className="transcript-subsection-bullet">{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-section">
                <Heading className="transcript-section-heading">Projects</Heading>
                <Separator />
                {information.projects.length == 0 ? (<Text color="gray">No Projects</Text>) :
                    information.projects.map((pr: Project) => (
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-subsection-title">{pr.title}</Text> </GridItem> <GridItem> <Text className="transcript-subsection-date">{new Date(pr.startDate ?? -1).toDateString()} - {new Date(pr.endDate ?? 0).toDateString()}</Text> </GridItem>
                            <List.Root>
                                {
                                    pr.bullets?.map((bullet: string) => (
                                        <ListItem className="transcript-subsection-bullet">{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-section">
                <Heading className="transcript-section-heading">Skills</Heading>
                <Separator />
            </Flex>
        </Flex>
    )
}