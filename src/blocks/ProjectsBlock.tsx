import { useState } from "react";
export default function ProjectsBlock({ data, onChange }: any) {

    const [header, setHeader] = useState("Some Project")

    //Both update the Projects header and update blocklist data
    const onChangeTitle = (e: any) => {
        setHeader(e.target.value)
        onChange({ ...data, title: e.target.value })
    }

    return (
        <form style={styles.form}>

            <h2 style={styles.blockHeader}>{header}</h2>

                        <input
                type="text"
                placeholder="title"
                value={data.title}
                maxLength={50}
                style={styles.input}
                onChange={onChangeTitle}
            />


            <input
                type="text"
                placeholder="description"
                value={data.description}
                maxLength={50}
                style={styles.input}
                onChange={(e) => onChange({ ...data, description: e.target.value })}
            />

            <input
                type="text"
                placeholder="start date"
                value={data.startDate}
                maxLength={4}
                style={styles.input}
                onChange={(e) => onChange({ ...data, startDate: e.target.value })}
            />



            <input
                type="text"
                placeholder="end date"
                value={data.endDate}
                maxLength={4}
                style={styles.input}
                onChange={(e) => onChange({ ...data, endDate: e.target.value })}
            />


        </form>
    );
}


const styles = {
    button: {
        borderRadius: "5px",
        borderWidth: "0",
        padding: "10px",
        borderStyle: "solid",
        background: "#ff6c00",
        color: "white",
        fontWeight: 900,
        marginTop: "10px"
    },
    input: {
        borderRadius: "5px",
        borderWidth: "0.5px",
        padding: "14px",
        borderColor: "rgb(255 255 255)",
        borderStyle: "solid",
        background: "#f9f9f9"
    },
    blockHeader: {
        textTransform: "uppercase" as const,
        letterSpacing: "1px",
        fontWeight: 200,
        color: "rgb(0 137 18)"
    },
    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "0.5rem",
        padding: "1rem",
    }
}