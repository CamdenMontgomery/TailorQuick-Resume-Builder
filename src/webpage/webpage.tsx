//import { useState } from "react";
import EducationSection from "../sections/educationSection";
import SideBarSectionLink from "../components/SidebarSectionLink";
import { useRef } from "react";


export default function Webpage() {
    //const [jd, setJd] = useState("");
    const educationSectionRef = useRef<HTMLDivElement>(null)

    return (
        <div style={styles.optionsContainer}>
            <div style={styles.optionsSidebar}>
                <SideBarSectionLink title="Education" color="#egegeg" section={educationSectionRef}>1</SideBarSectionLink>
            </div>
            <div style={styles.optionsContent}>
                <EducationSection ref={educationSectionRef}></EducationSection>
            </div>
        </div>
    );
}


const styles = {
    optionsContainer: {
        boxShadow: "rgba(0, 0, 0, 0.11) 0px 0px 12px 3px",
        width: "min(1000px, 100% - 100px)",
        borderRadius: "10px",
        background: "white",
        display: "flex",
        flexDirection: "row" as const,
        paddingLeft: "0",
        maxHeight: "800px",
        overflow: "hidden"
    },
    optionsContent: {
        width: "-webkit-fill-available",
        padding: "50px",
        overflowY: "scroll" as const
    },
    optionsSidebar: {
        width: "100px", boxShadow: "#0000000d 2px 0 4px 0"
    },

}