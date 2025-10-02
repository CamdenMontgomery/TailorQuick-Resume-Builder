import { TreeView, createTreeCollection, type TreeViewSelectionChangeDetails } from "@chakra-ui/react"
import type TQTranscript from "../interfaces/TQTranscript"
import type { SectionType } from "../types/SectionType"

/**
 * TreeView component tailored to display transcript sections and subsections
 *
 * @component
 *
 * @param {Object} props - React profile
 * @param {TQTranscript} props.transcript - The data displayed in the tree view
 * @returns {JSX.Element} Rendered tree view component
 */

export default function SectionTreeView({ transcript, callback }: { transcript: TQTranscript, callback : (section : SectionType) => void }) {

  const collection = createSectionTreeCollection(transcript)



  const reroute = (details: TreeViewSelectionChangeDetails) => {
    callback(details.selectedValue[0].split('/')[0] as SectionType)  //ID's in the form of [SectionType]/[Subsection or Action] e.g EDUCATION/ADD or EXPERIENCE/1
  }

  return (
    <TreeView.Root variant="subtle" onSelectionChange={reroute} collection={collection} maxW="sm">
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  )

}



interface Node {
  id: string
  name: string
  children?: Node[]
}


function createSectionTreeCollection(transcript: TQTranscript) {
  return createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
          { id: "PROFILE", name: "Profile" },
        {
          id: "EDUCATION",
          name: "Education",
          children: [
            ...transcript.education.map((education, index) => { return { id: `EDUCATION/${index}`, name: education.school ?? "" } }
            ),
            { id: "EDUCATION/ADD", name: "+ Add Education" },
          ],
        },
        {
          id: "EXPERIENCE",
          name: "Experience",
          children: [
            ...transcript.experience.map((experience, index) => { return { id: `EXPERIENCE/${index}`, name: experience.position ?? "" } }
            ),
            { id: "EXPERIENCE/ADD", name: "+ Add Experience" },
          ],
        },

        { id: "SKILLS", name: "Skills" },
      ],
    },
  })
}

