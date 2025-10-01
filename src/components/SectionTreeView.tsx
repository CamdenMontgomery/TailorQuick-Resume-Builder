import { TreeView, createTreeCollection } from "@chakra-ui/react"
import type TQTranscript from "../interfaces/TQTranscript"

/**
 * TreeView component tailored to display transcript sections and subsections
 *
 * @component
 *
 * @param {Object} props - React profile
 * @param {TQTranscript} props.transcript - The data displayed in the tree view
 * @returns {JSX.Element} Rendered button component
 */

export default function SectionTreeView({transcript} : {transcript : TQTranscript}) {

    const collection = createSectionTreeCollection(transcript)

    return (
        <TreeView.Root collection={collection} maxW="sm">
      <TreeView.Label>Tree</TreeView.Label>
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


function createSectionTreeCollection(_transcript: TQTranscript) {
    return createTreeCollection<Node>({
        nodeToValue: (node) => node.id,
        nodeToString: (node) => node.name,
        rootNode: {
            id: "ROOT",
            name: "",
            children: [
                {
                    id: "node_modules",
                    name: "node_modules",
                    children: [
                        { id: "node_modules/zag-js", name: "zag-js" },
                        { id: "node_modules/pandacss", name: "panda" },
                        {
                            id: "node_modules/@types",
                            name: "@types",
                            children: [
                                { id: "node_modules/@types/react", name: "react" },
                                { id: "node_modules/@types/react-dom", name: "react-dom" },
                            ],
                        },
                    ],
                },
                {
                    id: "src",
                    name: "src",
                    children: [
                        { id: "src/app.tsx", name: "app.tsx" },
                        { id: "src/index.ts", name: "index.ts" },
                    ],
                },
                { id: "panda.config", name: "panda.config.ts" },
                { id: "package.json", name: "package.json" },
                { id: "renovate.json", name: "renovate.json" },
                { id: "readme.md", name: "README.md" },
            ],
        },
    })
}

