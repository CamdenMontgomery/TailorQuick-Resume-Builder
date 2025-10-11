import { Button, Flex, Heading, HStack, Input, Stack, Tag } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function SkillsSubsection({ data }: { data: string[] }) {

    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Stack className="subsectionitem" margin="3rem">
            <Heading textAlign='justify' color='black'>Skills</Heading>
            <HStack>
                <Input placeholder="Write down a skill you have..." ref={inputRef}></Input>
                <Button background={"black"} color={"white"} onClick={() => { if (inputRef.current && inputRef.current.value != "") dispatch({ type: "ADD_SKILL", payload: { value: inputRef.current.value } }) }}>Add</Button>
            </HStack>
            <Flex gap={0.5} className="skill-subsection-skill-container">
                {(data.sort()).map((skill: string) =>
                    <Tag.Root size="lg" colorPalette="orange" height={"fit-content"}>
                        <Tag.Label textTransform="capitalize">{skill}</Tag.Label>
                        <Tag.EndElement>
                            <Tag.CloseTrigger onClick={() => dispatch({ type: "REMOVE_SKILL", payload: { value: skill } })} />
                        </Tag.EndElement>
                    </Tag.Root>
                )}
            </Flex>
        </Stack>
    )
}