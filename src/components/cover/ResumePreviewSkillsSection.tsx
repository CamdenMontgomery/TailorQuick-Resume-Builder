import { Flex, Heading, Separator, Text, HStack } from "@chakra-ui/react";
import type { SkillGroup } from "../../interfaces/IResume";


export default function ResumePreviewSkillsSection({ skillgroups }: { skillgroups: SkillGroup[] }) {

    return (
        <Flex className="resume-section">
            <Heading className="resume-section-heading">Skills</Heading>
            <Separator />
            {skillgroups.map((sk) => (
                <HStack className="chakra-hstack">
                    <Text className="resume-skills-label">{sk.label}</Text><Text>{sk.skills.join(", ")}</Text>
                </HStack>
            ))
            }
        </Flex>
    )
}//3500