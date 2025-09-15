import React from "react";

type ResumePreviewProps = {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skills;
  containerWidth?: string | number;
};

export type Project = {
  title: string;
  skills: string[];
  bullets: string[];
  date: string;
};

export type Experience = {
  company: string;
  position: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  dates: string;
  bullets?: string[];
};

export type Profile = {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

export type Skills = {
  languages: string[];
  frameworks: string[];
  tools: string[];
  soft: string[];
};

export default function ResumePreview({
  profile,
  experiences,
  projects,
  education,
  skills,
  containerWidth = "100%",
}: ResumePreviewProps) {
  return (
    <div style={{ ...styles.container, width: containerWidth }}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>{profile.name}</h1>
        <p style={styles.contact}>
          {profile.phone} | {profile.email} | {profile.linkedin} | {profile.github}
        </p>
      </header>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {education.map((ed: Education, idx: number) => (
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

      {/* Experience */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} style={styles.entry}>
            <div style={styles.entryHeader}>
              <span>{exp.position}</span>
              <span>{exp.dates}</span>
            </div>
            <div style={styles.entrySubheader}>
              <span>{exp.company}</span>
              <span>{exp.location}</span>
            </div>
            <ul style={styles.bullets}>
              {exp.bullets.map((b, bi) => (
                <li key={bi} style={styles.bulletItem}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} style={styles.entry}>
            <div style={styles.entryHeader}>
              <span>{proj.title}</span>
              <span>{proj.date}</span>
            </div>
            <div style={styles.entrySubheader}>
              <span>{proj.skills.join(", ")}</span>
            </div>
            <ul style={styles.bullets}>
              {proj.bullets.map((b, bi) => (
                <li key={bi} style={styles.bulletItem}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <p><b>Languages:</b> {skills.languages.join(", ")}</p>
        <p><b>Frameworks:</b> {skills.frameworks.join(", ")}</p>
        <p><b>Developer Tools:</b> {skills.tools.join(", ")}</p>
        <p><b>Soft Skills:</b> {skills.soft.join(", ")}</p>
      </section>
    </div>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    fontFamily: `"Times New Roman", serif`,
    fontSize: "clamp(10px, 1.2vw, 14px)", // responsive scaling
    lineHeight: 1.3,
    color: "#000",
    padding: "2%",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: "1em",
  },
  name: {
    margin: 0,
    fontSize: "clamp(16px, 3vw, 28px)",
    fontWeight: "bold",
  },
  contact: {
    margin: 0,
    fontSize: "clamp(10px, 1vw, 12px)",
  },
  section: {
    marginBottom: "1em",
  },
  sectionTitle: {
    borderBottom: "1px solid #000",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "0.5em",
    fontSize: "clamp(12px, 1.6vw, 16px)",
  },
  entry: {
    marginBottom: "0.8em",
  },
  entryHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  entrySubheader: {
    display: "flex",
    justifyContent: "space-between",
    fontStyle: "italic",
    fontSize: "0.9em",
  },
  bullets: {
    margin: 0,
    paddingLeft: "1.2em",
  },
};
