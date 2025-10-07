import { Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import type { SectionType } from "../types/SectionType";

export default function SubsectionFooter({section} : {section : SectionType}) {
    const dispatch = useDispatch()

    const addSubsectionItem = () => {
        return {
            type: `ADD_${section.toUpperCase()}`
        };
    }

    return (
        <Flex direction="row" justifyContent="flex-end" padding="1rem">
             <Button background="black" color="white" borderRadius="0.25rem" width="fit-content" onClick={ () => {dispatch(addSubsectionItem())}}>Add {section}</Button>
        </Flex>
   
)
}