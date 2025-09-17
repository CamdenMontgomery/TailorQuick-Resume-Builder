import styles from "../page.styles";
import type { Education } from "../types/education";

export default function ResumeEducationSection({educations} : {educations: Education[]}) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Education</h2>
            {educations.map((ed, idx) => (
                <div key={idx} style={styles.entry}>
                    <div style={styles.entryHeader}>
                        <span>{ed.school}</span>
                        <span>{ed.location}</span>
                    </div>
                    <div style={styles.entrySubheader}>
                        <span>{ed.degree}</span>
                        <span>{ed.dates}</span>
                    </div>
                    {ed.bullets && (
                        <ul style={styles.bullets}>
                            {ed.bullets.map((b, bi) => (
                                <li key={bi} style={styles.bulletItem}>{b}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    )
}