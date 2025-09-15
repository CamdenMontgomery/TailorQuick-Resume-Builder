import { useState } from "react";
export default function EducationBlock({ data, onChange }: any) {

    const [header, setHeader] = useState("Some Education")

    //Both update the experience header and update blocklist data
    const onChangeTitle = (e: any) => {
        setHeader(e.target.value)
        onChange({ ...data, school: e.target.value })
    }

    return (
        <form style={styles.form}>

            <h2 style={styles.blockHeader}>{header}</h2>

            <input
                type="text"
                placeholder="school"
                value={data.school}
                maxLength={50}
                style={styles.input}
                onChange={onChangeTitle}
            />


            <input
                type="text"
                placeholder="degree"
                value={data.degree}
                maxLength={50}
                style={styles.input}
                onChange={(e) => onChange({ ...data, degree: e.target.value })}
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


            {/* <button type="submit" style={blockStyles.button}>Save</button> */}
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
        color: "#893a00"
    },
    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "0.5rem",
        padding: "1rem",
    }
}