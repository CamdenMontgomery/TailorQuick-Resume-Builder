import { useState } from "react"


type BlockListProps = {
    blockName: string;
    BlockComponent: React.ComponentType<any>; // can be any React component
    emptyData: object; // template object for new blocks
};

export default function BlockList({ blockName, BlockComponent, emptyData }: BlockListProps) {
    const [blocks, setBlocks] = useState<object[]>([emptyData]);

    const addBlock = () => setBlocks([...blocks, { ...emptyData }]);

    const updateBlock = (index: number, newData: object) => {
        const updated = [...blocks];
        updated[index] = newData;
        setBlocks(updated);
    };


    return (
        <div style={styles.container}>
            {blocks.map((block, idx) => (
                <BlockComponent
                    key={idx}
                    data={block}
                    onChange={(newData: object) => updateBlock(idx, newData)}
                />
            ))}
            <button onClick={addBlock} style={styles.button}>+ Add Another {blockName}</button>
        </div>
    )

}


const styles = {
    container: {

    },
    button: {
        background: "transparent",
        width: "-webkit-fill-available",
        padding: "10px",
        fontWeight: "800",
    }
}