import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import schoolList from "../suggestions/schools";

export default function EducationBlock({ data, onChange }: { data: { school: "", degree: "", startYear: Date, endYear: Date }, onChange: (data: {}) => {} }) {

    const [header, setHeader] = useState("Some Education")
    const [schoolSuggestions, setSchoolSuggestions] = useState<string[]>([])

    //Both update the experience header and update blocklist data
    const onChangeTitle = (e: any) => {
        setHeader(e.target.value)
        onChange({ ...data, school: e.target.value })
    }

    const updateSchoolSuggestions = (text: string) => {
        fetch(encodeURI(`http://universities.hipolabs.com/search?name=${text}`)).then(
            async (res) => { setSchoolSuggestions((await res.json()).map((school: any) => (school.name))) }
        ).catch(() => {
            setSchoolSuggestions(schoolList)
        })
    }

    return (
        <form style={styles.form}>

            <h2 style={styles.blockHeader}>{header}</h2>

            <input
                type="text"
                list="schools"
                placeholder="School"
                value={data.school}
                maxLength={50}
                style={styles.input}
                onChange={(e: any) => { updateSchoolSuggestions(e.target.value); onChangeTitle(e) }}
            />
            <datalist id="schools">
                {schoolSuggestions.map((value: string) => (<option>{value}</option>))}
            </datalist>

            <input
                type="text"
                placeholder="degree"
                value={data.degree}
                maxLength={50}
                style={styles.input}
                onChange={(e) => onChange({ ...data, degree: e.target.value })}
            />


            <DatePicker selected={data.startYear} onChange={(date) => onChange({ ...data, startYear: date?.toDateString() })} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997"></DatePicker>
            <DatePicker selected={data.endYear} onChange={(date) => onChange({ ...data, endYear: date?.toDateString() })} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997"></DatePicker>




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