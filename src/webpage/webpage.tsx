//import { useState } from "react";
import EducationSection from "../sections/educationSection";

function SideBarSectionLink({title, color} : {title: string, color: string}){
return (
    <div>
        <div style={{"backgroundColor": color}}></div>
        <h3>{title}</h3>
    </div>
)
}

export default function Webpage() {
  //const [jd, setJd] = useState("");

  return (    
    <div style={styles.optionsContainer}>
        <div style={styles.optionsSidebar}>
            <SideBarSectionLink title="Education" color="#egegeg"></SideBarSectionLink>
        </div>
        <div style={styles.optionsContent}>
            <EducationSection></EducationSection>
        </div>
    </div>
  );
}


const styles = {
    optionsContainer: {
        boxShadow: "#0000001c 0 0 12px 3px",
        padding: "50px",
        width: "MIN(500px, calc(100% - 100px))",
        margin: "auto",
        borderRadius: "10px",
        background: "white",
    },
    optionsContent: {

    },
    optionsSidebar: {

    },

}