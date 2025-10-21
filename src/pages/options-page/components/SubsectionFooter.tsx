import { Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import type { SectionType } from "../../../shared/types/SectionType";
import { FaPlus } from "react-icons/fa";

export default function SubsectionFooter({section} : {section : SectionType}) {
    const dispatch = useDispatch()

    const addSubsectionItem = () => {
        return {
            type: `ADD_${section.toUpperCase()}`
        };
    }

    return (
        <Flex direction="row" justifyContent="flex-end" padding="1rem" paddingRight="3rem">
             <Button background="black" color="white" borderRadius="0.25rem" width="fit-content" onClick={ () => {dispatch(addSubsectionItem())}}><FaPlus className="button-icon"/>Add {section}</Button>
        </Flex>
   
)
}