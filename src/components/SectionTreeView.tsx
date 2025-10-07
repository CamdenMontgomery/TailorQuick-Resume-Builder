import { TreeView, createTreeCollection } from "@chakra-ui/react"
import type TQTranscript from "../interfaces/TQTranscript"
import type { SectionType } from "../types/SectionType"
import { LuCodesandbox, LuLightbulb } from "react-icons/lu"
import {CgProfile} from "react-icons/cg"
import {MdOutlineSchool, MdWorkOutline} from "react-icons/md"
import { useState } from "react"
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

  //Programmatically handle expansion and selection to overwrite base behaviour
  const [expandedValue, setExpandedValue] = useState<string[]>([])
  const [selectedValue, setSelectedValue] = useState<string[]>(["PROFILE"])



  const handleSelection = (e : TreeView.SelectionChangeDetails) => {

    const selection = e.selectedValue[0] //Single Selection
    if (!selection.includes('/')) {
      setExpandedValue([selection]); //If top level selection, update expanded value
      setSelectedValue([selection]);  //If top level selection, update selected value value

      //This is so that only the larger section leaves act as selectables while we make the subsection leaves act as buttons 

    }
    callback(selection.split('/')[0] as SectionType)  //ID's in the form of [SectionType]/[Subsection or Action] e.g EDUCATION/ADD or EXPERIENCE/1
  }

  const collection = createSectionTreeCollection(transcript)

  const iconFromID = (id : string) => {
    switch (id){
      case "PROFILE": return <CgProfile className="sidebar-icon"/> 
      case "EDUCATION": return <MdOutlineSchool className="sidebar-icon"/> 
      case "EXPERIENCE": return <MdWorkOutline className="sidebar-icon"/>
      case "PROJECTS": return <LuCodesandbox className="sidebar-icon"/>
      case "SKILLS": return <LuLightbulb className="sidebar-icon"/>
    }
  }



  return (
    <TreeView.Root animateContent colorPalette='orange' gap="1rem" textAlign="left" fontSize="1rem" variant="subtle" onSelectionChange={handleSelection} collection={collection} maxW="sm"
      expandedValue={expandedValue}
      selectedValue={selectedValue}
    >
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl className="section-tree-option">
                {iconFromID(node.id)}
                <TreeView.BranchText className={nodeState.depth > 1 ? "section-tree-text-subtle" : "section-tree-text"}>{node.name == "" ? "New" : node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item className="section-tree-option">
                {iconFromID(node.id)}
                <TreeView.ItemText className={nodeState.depth > 1 ? "section-tree-text-subtle" : "section-tree-text"}>{node.name == "" ? "New" : node.name}</TreeView.ItemText>
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
        {
          id: "PROJECTS",
          name: "Projects",
          children: [
            ...transcript.experience.map((experience, index) => { return { id: `PROJECTS/${index}`, name: experience.position ?? "" } }
            ),
            { id: "PROJECTS/ADD", name: "+ Add Project" },
          ],
        },

        { id: "SKILLS", name: "Skills" },
      ],
    },
  })
}

