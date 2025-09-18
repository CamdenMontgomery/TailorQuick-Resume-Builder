import { useEffect, useState } from "react"
import StorageService from "../services/storageService";


type BlockListProps = {
    blockName: string;
    BlockComponent: React.ComponentType<any>; // can be any React component
    emptyData: object; // template object for new blocks
    storageLabel: string
};

export default function BlockList({ blockName, BlockComponent, emptyData, storageLabel }: BlockListProps) {
    const [blocks, setBlocks] = useState<object[]>([emptyData]);

    const addBlock = () => {
        StorageService.storeSectionData(storageLabel, [...blocks, { ...emptyData }])
        setBlocks([...blocks, { ...emptyData }])
    };

    const updateBlock = (index: number, newData: object) => {
        const updated = [...blocks];
        updated[index] = newData;
        setBlocks(updated);
        StorageService.storeSectionData(storageLabel, updated)
    };

    useEffect(() => {
        //Fill With Storage Data On Mount
        StorageService.getBlocklistData(storageLabel).then((res) => {
            setBlocks(res)
        })
    }, [])


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
  background: "#000000",
  padding: "10px",
  fontWeight: 800,
  color: "white",
  width: "-webkit-fill-available",
  border: "none",
  borderRadius: "5px"
    }
}