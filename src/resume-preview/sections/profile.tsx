import type { Profile } from "../types/profile";
import styles from "../page.styles";

export default function ResumeProfileSection({ profile }: { profile: Profile }) {
    return (
        <header style={styles.header}>
            <h1 style={styles.name}>{profile.name}</h1>
            <p style={styles.contact}>
                {profile.phone} | {profile.email} | {profile.linkedin} | {profile.github}
            </p>
        </header>
    )
}