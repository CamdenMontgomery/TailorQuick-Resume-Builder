import { Em, Flex, Grid, GridItem, Heading, List, ListItem, Text } from "@chakra-ui/react";
import type TQTranscript from "../interfaces/TQTranscript";
import type { Education } from "../resume-preview/types/education";

export default function Transcript({information} : {information : TQTranscript}){
    return (
        <Flex className="transcript-container">
            <Flex className="transcript-profile-container transcript-section">
                <Heading>{information.profile.firstName} {information.profile.lastName}</Heading>
                <Em>{information.profile.email}</Em>
            </Flex>
            <Flex className="transcript-education-container transcript-section">
                <Heading>Education</Heading>
                <hr></hr>
                {   information.education.length == 0 ? (<Text color="gray">No Education</Text>) :
                    information.education.map((ed : Education) => ( 
                        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
                            <GridItem> <Text className="transcript-education-type">{ed.degree}</Text> </GridItem> <GridItem> <Text className="transcript-education-date">{ed.dates}</Text> </GridItem>
                            <GridItem> <Text className="transcript-education-school">{ed.school}</Text> </GridItem>
                            <List.Root>
                                {
                                    ed.bullets?.map((bullet : string) => (
                                        <ListItem>{bullet}</ListItem>
                                    ))
                                }
                            </List.Root>
                        </Grid>
                    ))
                }
            </Flex>
            <Flex className="transcript-experience-container transcript-section"></Flex>
            <Flex className="transcript-projects-container transcript-section"></Flex>
            <Flex className="transcript-skills-container transcript-section"></Flex>
        </Flex>
    )
}