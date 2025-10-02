import { Stack,  Heading } from "@chakra-ui/react"
import SectionTreeView from "../components/SectionTreeView"
import SubsectionView from "../components/SubsectionView"
import EducationSubsection from "../components/SubsectionItems/EducationSubsection"

export default function BuilderPage() {
    return (
        <Stack id="app-container" direction="row">
            <Stack id="sidebar" direction="column">
                <Heading>TailorThis</Heading>
                <SectionTreeView transcript={{education: [], experience: []}}></SectionTreeView>
            </Stack>
            <Stack id="content" direction="column">
                <SubsectionView SubsectionViewItem={EducationSubsection}></SubsectionView>
            </Stack>
            <Stack id="preview-generate-container" direction="column"></Stack>
        </Stack>
    )
}