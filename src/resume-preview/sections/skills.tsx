import styles from "../page.styles"
import type { Skills } from "../types/skills"

export default function ResumeSkillsSection({ skills }: { skills: Skills }) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Technical Skills</h2>
            <p><b>Languages:</b> {skills.languages ? skills.languages.join(", ") : null}</p>
            <p><b>Frameworks:</b> {skills.frameworks ? skills.frameworks.join(", ") : null}</p>
            <p><b>Developer Tools:</b> {skills.tools ? skills.tools.join(", ") : null}</p>
            <p><b>Soft Skills:</b> {skills.soft ? skills.soft.join(", ") : null}</p>
        </section>
    )
}