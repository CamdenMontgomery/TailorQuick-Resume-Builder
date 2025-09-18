
import BlockList from "../components/blocklist";
import ProjectsBlock from "../blocks/ProjectsBlock";
import { forwardRef } from "react";




const ProjectsSection = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>Projects</h2>
            <p style={styles.subtitle}>List your relevant Projects.</p>
            <BlockList storageLabel="Projects" blockName="Projects" BlockComponent={ProjectsBlock} emptyData={{title:"",description:"",startDate:"",endDate:""}}></BlockList>
        </div>
    );
})

export default ProjectsSection;



const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
              paddingTop: "50px",
        fontWeight: "900",
        color: "rgb(0 22 139)",
        fontSize: "x-large"
    }, subtitle: {
        fontSize: "larger",
        letterSpacing: "1px",
        textTransform: "capitalize" as const,
        color: "gray",
        fontWeight: 200
    }

}