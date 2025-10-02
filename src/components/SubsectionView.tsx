import {  Stack } from "@chakra-ui/react"
import SubsectionHeader from "./SubsectionHeader"
import SubsectionFooter from "./SubsectionFooter"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"
import FadeScroll from "./wrappers/scroll"

export default function SubsectionView({SubsectionViewItem} : {SubsectionViewItem : React.ComponentType<any>}){
    let educations = useSelector((state : TQTranscript) => state.education)
    
    return (
        <Stack id="subsectionview" direction="column" height="100%" gap="0" background="white">
            <SubsectionHeader></SubsectionHeader>
            <FadeScroll flex="1">
            <Stack id="subsectionlist" gap="0" direction="column">
                {
                    educations.map(_data => <SubsectionViewItem></SubsectionViewItem>)
                }
            </Stack>
            </FadeScroll>
            <SubsectionFooter section="Education"></SubsectionFooter>
        </Stack>
    )
}