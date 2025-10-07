import {  useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import schoolList from "../suggestions/schools";

export default function EducationBlock({ data, onChange, remove }: { data: { school: "", degree: "", startYear: Date, endYear: Date, field: "" }, onChange: (data: {}) => {}, remove : () => void }) {

    const [schoolSuggestions, setSchoolSuggestions] = useState<string[]>([])

    //Both update the experience header and update blocklist data
    const onChangeTitle = (e: any) => {
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

            <h2 style={styles.blockHeader}>{data.school + " - Education"}</h2>

            <div style={{ ...styles.inputContainer, gridColumn: "1/3" }}>
                <label style={styles.label}>School</label>
                <input
                    type="text"
                    name="schools"
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
            </div>

            <div style={styles.inputContainer}>
                <label style={styles.label}>Degree</label>
                <select
                    value={data.degree}
                    style={styles.select}
                    onChange={(e) => onChange({ ...data, degree: e.target.value })}
                >  <option value="">Select degree</option>

                    <optgroup label="Secondary / Pre-degree">
                        <option value="highschool">High School Diploma / Secondary School Certificate</option>
                        <option value="ged">GED / Equivalent</option>
                    </optgroup>

                    <optgroup label="Undergraduate / Associate">
                        <option value="certificate_undergrad">Undergraduate Certificate</option>
                        <option value="diploma_undergrad">Undergraduate Diploma</option>
                        <option value="associate_aa">Associate of Arts (AA)</option>
                        <option value="associate_as">Associate of Science (AS)</option>
                        <option value="associate_aas">Associate of Applied Science (AAS)</option>
                        <option value="bachelor_ba">Bachelor of Arts (BA)</option>
                        <option value="bachelor_bs">Bachelor of Science (BS/BSc)</option>
                        <option value="bachelor_bfa">Bachelor of Fine Arts (BFA)</option>
                        <option value="bachelor_beng">Bachelor of Engineering (BEng)</option>
                        <option value="bachelor_barch">Bachelor of Architecture (BArch)</option>
                    </optgroup>

                    <optgroup label="Postgraduate / Master's">
                        <option value="postgrad_certificate">Postgraduate Certificate</option>
                        <option value="postgrad_diploma">Postgraduate Diploma</option>
                        <option value="master_ma">Master of Arts (MA)</option>
                        <option value="master_ms">Master of Science (MS/MSc)</option>
                        <option value="master_meng">Master of Engineering (MEng)</option>
                        <option value="master_mba">Master of Business Administration (MBA)</option>
                        <option value="master_mfa">Master of Fine Arts (MFA)</option>
                        <option value="master_march">Master of Architecture (MArch)</option>
                    </optgroup>

                    <optgroup label="Doctoral / Research">
                        <option value="doctoral_phd">Doctor of Philosophy (PhD / DPhil)</option>
                        <option value="doctoral_edd">Doctor of Education (EdD)</option>
                        <option value="doctoral_other">Other Research Doctorate</option>
                    </optgroup>

                    <optgroup label="Professional / Clinical">
                        <option value="professional_md">Doctor of Medicine (MD)</option>
                        <option value="professional_do">Doctor of Osteopathy (DO)</option>
                        <option value="professional_jd">Juris Doctor (JD) / Bachelor of Laws (LLB)</option>
                        <option value="professional_dds">Doctor of Dental Surgery (DDS) / DMD</option>
                        <option value="professional_dvm">Doctor of Veterinary Medicine (DVM)</option>
                        <option value="professional_pharmd">Doctor of Pharmacy (PharmD)</option>
                        <option value="professional_other">Other Professional Degree</option>
                    </optgroup>

                    <optgroup label="Vocational / Technical">
                        <option value="vocational_trade_certificate">Trade Certificate / Vocational Certificate</option>
                        <option value="diploma_vocational">Vocational Diploma / Technical Diploma</option>
                        <option value="apprenticeship">Apprenticeship / Journeyman Certificate</option>
                    </optgroup>

                    <optgroup label="Other / Non-degree">
                        <option value="non_degree">Non-degree / Continuing Education</option>
                        <option value="microcredential">Microcredential / Badge</option>
                        <option value="other">Other / Prefer not to say</option>
                    </optgroup></select>
            </div>


            <div style={styles.inputContainer}>
                <label style={styles.label}>Field of Study</label>
                <input
                    type="text"
                    placeholder="Field"
                    value={data.field}
                    maxLength={50}
                    style={styles.input}
                    onChange={(e) => onChange({ ...data, field: e.target.value })}
                />
            </div>

            <div style={styles.inputContainer}>
                <label style={styles.label}>Start Date</label>
                <DatePicker selected={data.startYear} onChange={(date) => onChange({ ...data, startYear: date?.toDateString() })} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997"></DatePicker>
            </div>

            <div style={styles.inputContainer}>
                <label style={styles.label}>End Date</label>
                <DatePicker selected={data.endYear} onChange={(date) => onChange({ ...data, endYear: date?.toDateString() })} showIcon dateFormat="MMM yyyy" showMonthYearPicker placeholderText="e.g Jan. 1997"></DatePicker>
            </div>



            <button type="button" onClick={() => {remove()}} style={styles.button}>Remove</button>
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
        marginTop: "30px",
        gridColumn: "1 / 3",
        textTransform: "uppercase" as const,
        fontSize: "smaller",
        cursor: "pointer"
    },
    input: {
        borderRadius: "5px",
        borderWidth: "0.5px",
        padding: "14px",
        borderColor: "rgb(255 255 255)",
        borderStyle: "solid",
        background: "#f9f9f9"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column" as const,
        marginTop: "10px"
    },
    blockHeader: {
        textTransform: "uppercase" as const,
        fontWeight: 800,
        color: "rgb(0 0 0)",
        letterSpacing: "2px",
        gridColumn: "1 / 3"
    },
    form: {
        display: "grid",
        gap: "0.5rem 1rem",
        background: "#ffffff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "#00000012 0 0 6px 0",
        marginBottom: "30px"
    },
    label: {
        padding: "10px",
        fontWeight: "bolder",
        textTransform: "uppercase" as const,
        letterSpacing: "1px",
        color: "#3d3d3d"
    },
    select: {
          borderRadius: "5px",
  borderWidth: "0.5px",
  padding: "14px",
  borderColor: "rgb(255, 255, 255)",
  borderStyle: "solid",
  background: "rgb(249, 249, 249)",
  height: "45px"
    }
}