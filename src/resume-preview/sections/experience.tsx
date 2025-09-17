import type { Experience } from "../types/experience";
import styles from "../page.styles";

export default function ResumeExperienceSection({ experiences }: { experiences: Experience[] }) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Experience</h2>
            {experiences.map((exp, idx) => (
                <div key={idx} style={styles.entry}>
                    <div style={styles.entryHeader}>
                        <span>{exp?.position ?? ""}</span>
                        <span>{exp?.dates ?? ""}</span>
                    </div>
                    <div style={styles.entrySubheader}>
                        <span>{exp?.company ?? ""}</span>
                        <span>{exp?.location ?? ""}</span>
                    </div>
                    <ul style={styles.bullets}>
                        {exp?.bullets ? exp.bullets.map((b, bi) => (
                            <li key={bi} style={styles.bulletItem}>{b}</li>
                        )) : null}
                    </ul>
                </div>
            ))}
        </section>
    )
}