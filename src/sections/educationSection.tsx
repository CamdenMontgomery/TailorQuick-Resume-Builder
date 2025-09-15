
import BlockList from "../components/blocklist";
import EducationBlock from "../blocks/EducationBlock";
import { forwardRef } from "react";




const EducationSection = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>EDUCATION</h2>
            <p style={styles.subtitle}>List your relevant education.</p>
            <BlockList blockName="Education" BlockComponent={EducationBlock} emptyData={{ school: "", degree: "", startYear: "", endYear: "" }}></BlockList>
        </div>
    );
})

export default EducationSection;



const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
        fontWeight: "900",
        color: "#ff6c00",
        fontSize: "x-large"
    }, subtitle: {
        fontSize: "larger",
        letterSpacing: "1px",
        textTransform: "capitalize" as const,
        color: "gray",
        fontWeight: 200
    }

}