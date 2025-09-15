import Page from "./page"

export default function ResumePreview() {
    return (
        <div style={styles.container}>
            <Page profile={{
                name: "Camden Montgomery",
                phone: "305-484-1537",
                email: "camden.montgomery730@gmail.com",
                linkedin: "linkedin.com/in/camden",
                github: "github.com/camden",
            }}
                education={[
                    {
                        school: "Florida International University",
                        degree: "B.S. in Computer Science",
                        location: "Miami, FL",
                        dates: "2023 – 2025",
                        bullets: ["Summa Cum Laude", "Senior Design Showcase – 2nd Place"],
                    },
                ]}
                experiences={[
                    {
                        company: "Sargasolutions Inc",
                        position: "Software Developer Intern",
                        dates: "Mar 2025 – Jun 2025",
                        location: "Miami, FL",
                        bullets: ["Built 20+ reusable Angular components", "Integrated Mapbox APIs"],
                    },
                ]}
                projects={[
                    {
                        title: "Chemistry.io",
                        skills: ["JS", "Node.js", "Socket.IO"],
                        bullets: ["Built real-time multiplayer app", "Handled 50+ concurrent users"],
                        date: "Sep 2024",
                    },
                ]}
                skills={{
                    languages: ["Java", "Python", "C++", "SQL"],
                    frameworks: ["React", "Node.js", "Angular"],
                    tools: ["Git", "Postman", "Azure"],
                    soft: ["Team Leadership", "Communication"],
                }}></Page>
        </div>
    )
}


const styles = {
    container: {
        aspectRatio: "8.5 / 11",
        height: "-webkit-fill-available",
        background: "white",
        maxHeight: "800px",
        margin: "100px",
        boxShadow: "#0000002e 0 0 5px 0",
        width: "clamp(0px, 50%, 600px)"
    }
}