import { Stack,  Heading } from "@chakra-ui/react"
import SectionTreeView from "../components/SectionTreeView"
import SubsectionView from "../components/SubsectionView"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"
import { useState } from "react"
import type { SectionType } from "../types/SectionType"

export default function BuilderPage() {

    let transcript = useSelector((state : TQTranscript) => state)
    let [viewSection, setViewSection] = useState<SectionType>("PROFILE")

    return (
        <Stack id="app-container" direction="row">
            <Stack id="sidebar" direction="column">
                <Heading>TailorThis</Heading>
                <SectionTreeView transcript={transcript} callback={setViewSection}></SectionTreeView>
            </Stack>
            <Stack id="content" direction="column">
                <SubsectionView section={viewSection}></SubsectionView>
            </Stack>
            <Stack id="preview-generate-container" direction="column"></Stack>
        </Stack>
    )
}