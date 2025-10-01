import { Stack,  Heading } from "@chakra-ui/react"
import SectionTreeView from "../components/SectionTreeView"

export default function BuilderPage() {
    return (
        <Stack direction="row">
            <Stack id="sidebar" direction="column">
                <Heading>TailorThis</Heading>
                <SectionTreeView transcript={{}}></SectionTreeView>
            </Stack>
            <Stack id="content" direction="column">
                <SubsectionView></SubsectionView>
            </Stack>
            <Stack id="preview-generate-container" direction="column"></Stack>
        </Stack>
    )
}