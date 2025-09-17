import { useState } from "react";
import BulletedList from "../components/bulletedList";
export default function ExperienceBlock({ data, onChange }: any) {

    const [header, setHeader] = useState("Some Experience")

    //Both update the experience header and update blocklist data
    const onChangeTitle = (e: any) => {
        setHeader(e.target.value)
        onChange({ ...data, company: e.target.value })
    }

    return (
        <form style={styles.form}>

            <h2 style={styles.blockHeader}>{header}</h2>

            <input
                type="text"
                placeholder="company"
                value={data.company}
                maxLength={50}
                style={styles.input}
                onChange={onChangeTitle}
            />


            <input
                type="text"
                placeholder="position"
                value={data.position}
                maxLength={50}
                style={styles.input}
                onChange={(e) => onChange({ ...data, position: e.target.value })}
            />

            <input
                type="text"
                placeholder="start year"
                value={data.startYear}
                maxLength={4}
                style={styles.input}
                onChange={(e) => onChange({ ...data, startYear: e.target.value })}
            />



            <input
                type="text"
                placeholder="end year"
                value={data.endYear}
                maxLength={4}
                style={styles.input}
                onChange={(e) => onChange({ ...data, endYear: e.target.value })}
            />



            <BulletedList list={data.bullets} onChange={(list) => {onChange({ ...data, bullets: list })}} ></BulletedList>

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