import { Stack } from "@chakra-ui/react"
import SubsectionHeader from "./SubsectionHeader"
import SubsectionFooter from "./SubsectionFooter"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"

export default function SubsectionView({SubsectionViewItem} : {SubsectionViewItem : React.ComponentType<any>}){
    let educations = useSelector((state : TQTranscript) => state.education)
    
    return (
        <Stack direction="column">
            <SubsectionHeader></SubsectionHeader>
            <Stack direction="column">
                {
                    educations.map(_data => <SubsectionViewItem>text</SubsectionViewItem>)
                }
                
            </Stack>
            <SubsectionFooter section="Education"></SubsectionFooter>
        </Stack>

    )
}