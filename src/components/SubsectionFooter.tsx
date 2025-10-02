import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import type { SectionType } from "../types/SectionType";

export default function SubsectionFooter({section} : {section : SectionType}) {
    const dispatch = useDispatch()

    const addSubsectionItem = () => {
        return {
            type: `ADD_${section.toUpperCase()}`
        };
    }

    return (<Button onClick={ () => {dispatch(addSubsectionItem())}}>Add {section}</Button>)
}