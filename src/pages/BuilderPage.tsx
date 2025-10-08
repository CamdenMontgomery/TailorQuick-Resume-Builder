import { Stack, Heading, Flex, Badge } from "@chakra-ui/react"
import SectionTreeView from "../components/SectionTreeView"
import SubsectionView from "../components/SubsectionView"
import { useSelector } from "react-redux"
import type TQTranscript from "../interfaces/TQTranscript"
import { useState } from "react"
import type { SectionType } from "../types/SectionType"
import Transcript from "../components/Transcript"
import { RiSettingsFill } from "react-icons/ri";

export default function BuilderPage() {

    let transcript = useSelector((state: TQTranscript) => state)
    let [viewSection, setViewSection] = useState<SectionType>("PROFILE")

    return (
        <Stack id="app-container" direction="row">
            <Stack id="sidebar" direction="column">
                <Flex direction="column" id="logo-container">
                    <Heading id="logo">TailorScript</Heading>
                    <Badge variant="solid" colorPalette="orange" color="white" width="fit-content">
                        <RiSettingsFill />
                        Configs
                    </Badge>
                </Flex>
                <SectionTreeView transcript={transcript} callback={setViewSection}></SectionTreeView>
            </Stack>
            <Stack id="content" direction="column">
                <SubsectionView section={viewSection}></SubsectionView>
            </Stack>
            <Stack id="preview-generate-container" direction="column">
                <Transcript information={transcript}></Transcript>
            </Stack>
        </Stack>
    )
}