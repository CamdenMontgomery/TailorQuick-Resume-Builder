
import BlockList from "../components/blocklist";
import ExperienceBlock from "../blocks/ExperienceBlock";
import { forwardRef } from "react";




const ExperienceSection =  forwardRef<HTMLDivElement, {}>(({}, ref) => {
    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>EXPERIENCE</h2>
            <p style={styles.subtitle}>List your relevant experience.</p>
            <BlockList blockName="Experience" BlockComponent={ExperienceBlock} emptyData={{ company: "", position: "", startYear: "", endYear: "", description: "" }}></BlockList>
        </div>
    );
})

export default ExperienceSection;



const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
        fontWeight: "900",
        color: "rgb(0 147 94)",
        fontSize: "x-large"
    },
    subtitle: {
          fontSize: "larger",
  letterSpacing: "1px",
  textTransform: "capitalize" as const,
  color: "gray",
  fontWeight: 200
    }

}