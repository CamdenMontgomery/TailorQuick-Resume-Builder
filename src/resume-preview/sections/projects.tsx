import type { Project } from "../types/project";
import styles from "../page.styles";

export default function ResumeProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Projects</h2>
            {projects.map((proj, idx) => (
                <div key={idx} style={styles.entry}>
                    <div style={styles.entryHeader}>
                        <span>{proj.title}</span>
                        <span>{proj.date}</span>
                    </div>
                    <div style={styles.entrySubheader}>
                        <span>{proj.skills ? proj.skills.join(", ") : null}</span>
                    </div>
                    <ul style={styles.bullets}>
                        { proj.bullets ? proj.bullets.map((b, bi) => (
                            <li key={bi} style={styles.bulletItem}>{b}</li>
                        )) : null}
                    </ul>
                </div>
            ))}
        </section>
    )
}