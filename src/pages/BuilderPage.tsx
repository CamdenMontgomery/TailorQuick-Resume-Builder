import { Stack,  Heading, Text } from "@chakra-ui/react"
import SectionTreeView from "../components/SectionTreeView"
import SubsectionView from "../components/SubsectionView"

export default function BuilderPage() {
    return (
        <Stack direction="row">
            <Stack id="sidebar" direction="column">
                <Heading>TailorThis</Heading>
                <SectionTreeView transcript={{education: [], experience: []}}></SectionTreeView>
            </Stack>
            <Stack id="content" direction="column">
                <SubsectionView SubsectionViewItem={Text}></SubsectionView>
            </Stack>
            <Stack id="preview-generate-container" direction="column"></Stack>
        </Stack>
    )
}