
import BlockList from "../components/blocklist";
import EducationBlock from "../blocks/EducationBlock";




export default function EducationSection() {

    return (
        <div style={styles.sectionContainer}>
            <h2 style={styles.title}>EDUCATION</h2>
            <p>List your relevant education.</p>
            <BlockList blockName="Education" BlockComponent={EducationBlock} emptyData={{ school: "", degree: "", startYear: "", endYear: "" }}></BlockList>
        </div>
    );
}





const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
        fontWeight: "900",
        color: "#ff6c00",
        fontSize: "x-large"
    },

}