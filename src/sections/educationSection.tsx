import { useState } from "react";
import BlockList from "../components/blocklist";


function EducationBlock({ data, onChange }: any) {

    const [header, setHeader] = useState("Some Education")

    //Both update the experience header and update blocklist data
    const onChangeTitle = (e: any) => {
        setHeader(e.target.value)
        onChange({ ...data, school: e.target.value })
    }

    return (
        <form style={styles.form}>

            <h2 style={blockStyles.blockHeader}>{header}</h2>

            <input
                type="text"
                placeholder="school"
                value={data.school}
                maxLength={50}
                style={blockStyles.input}
                onChange={onChangeTitle}
            />


            <input
                type="text"
                placeholder="degree"
                value={data.degree}
                maxLength={50}
                style={blockStyles.input}
                onChange={(e) => onChange({ ...data, degree: e.target.value })}
            />

            <input
                type="text"
                placeholder="start year"
                value={data.startYear}
                maxLength={4}
                style={blockStyles.input}
                onChange={(e) => onChange({ ...data, startYear: e.target.value })}
            />



            <input
                type="text"
                placeholder="end year"
                value={data.endYear}
                maxLength={4}
                style={blockStyles.input}
                onChange={(e) => onChange({ ...data, endYear: e.target.value })}
            />


            {/* <button type="submit" style={blockStyles.button}>Save</button> */}
        </form>
    );
}


export default function EducationSection() {

    return (
        <div style={styles.sectionContainer}>
            <h2 style={styles.title}>Education</h2>
            <p>List your relevant education.</p>
            <BlockList blockName="Education" BlockComponent={EducationBlock} emptyData={{ school: "", degree: "", startYear: "", endYear: "" }}></BlockList>
        </div>
    );
}



const blockStyles = {
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
        padding: "10px",
        borderColor: "#d9d9d9",
        borderStyle: "solid"
    },
    blockHeader: {
        textTransform: "uppercase" as const,
        letterSpacing: "1px",
        textDecoration: "underline"
    }
}

const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "0.5rem",
        padding: "1rem",
    },
    title: {
        fontWeight: "900",
        color: "#ff6c00",
        fontSize: "x-large"
    },

}