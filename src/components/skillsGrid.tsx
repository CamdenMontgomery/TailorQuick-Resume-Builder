import { useRef } from "react"


export default function SkillGrid({ list = [], onChange }: { list: string[] | undefined, onChange: (data: string[]) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)


    return (
        <>

            <div style={styles.buttonContainer}>
                <input ref={inputRef} type="text"></input><button type="button" onClick={() => {
                    list.push(inputRef.current?.value ?? "")
                    onChange(list)
                }}>+ Add</button>
            </div>

            <div style={styles.tagsContainer}>
                {list.map((tag) => (
                    <span style={styles.tag} onClick={() => { }}>{tag}</span>
                ))}
            </div>

        </>
    )
}



const styles = {
    buttonContainer: {

    },
    tag: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid rgb(255, 255, 255)",
        background: "rgb(253, 253, 253)",
        boxShadow: "rgba(0, 0, 0, 0.26) 0px 0px 3px 0px",
        minWidth: "59px",
        textTransform: "capitalize" as const,
        display: "flex",
        alignItems: "center" as const,
        fontWeight: 200,
        justifyContent: "center" as const
    },
    tagsContainer: {
        height: "fit-content",
        display: "flex",
        gap: "10px",
        paddingTop: "10px",
        flexWrap: "wrap" as const
    }
}