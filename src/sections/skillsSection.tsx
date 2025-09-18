import { forwardRef, useEffect, useState } from "react";
import SkillGrid from "../components/skillsGrid";
import StorageService from "../services/storageService";




const SkillsSection = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    const [skills, setSkills] = useState<{ uncategorized?: string[] }>({})

    const updateSkills = (newData: string[]) => {
        const updated = { ...skills, uncategorized: newData }
        setSkills(updated);
        StorageService.storeSectionData("skills", updated)
    };


    useEffect(() => {
        //Fill With Storage Data On Mount
        StorageService.getBlocklistData("skills").then((res) => {
            setSkills(res)
        })
    }, [])

    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>SKILLS</h2>
            <p style={styles.subtitle}>List your relevant skills.</p>
            <SkillGrid list={skills?.uncategorized} onChange={updateSkills}></SkillGrid>
        </div>
    );
})

export default SkillsSection;



const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
        paddingTop: "50px",
        fontWeight: "900",
        color: "rgb(85 0 147)",
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