import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export default function SubsectionFooter({section} : {section : string}) {
    const dispatch = useDispatch()

    const addSubsectionItem = () => {
        return {
            type: `ADD_${section.toUpperCase()}`
        };
    }

    return (<Button onClick={ () => {dispatch(addSubsectionItem())}}>Add</Button>)
}