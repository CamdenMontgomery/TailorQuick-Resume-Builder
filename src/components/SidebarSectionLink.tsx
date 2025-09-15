export default function SideBarSectionLink({ title, color, section, children }: { title: string, color: string, section: React.RefObject<HTMLDivElement | null>, children: React.ReactNode }) {
    return (
        <button style={styles.container} onClick={() => { if (section != null) section.current?.scrollIntoView({ behavior: "smooth" }); }}>
            <div style={{...styles.icon, background:color}}>{children}</div>
            <h3 style={styles.label}>{title}</h3>
        </button>
    )
}



const styles = {
    container: {
        padding: "21px",
        width: "-webkit-fill-available",
        borderWidth: "0",
        background: "white"
    },
    icon: {
        background: "white",
        borderRadius: "62px",
        width: "-webkit-fill-available",
        aspectRatio: "1",
        color: "white",
        textAlign: "center" as const,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "x-large",
        fontWeight: "bold",
        lineHeight: "24px",
        margin: "8PX"
    }
    ,
    label: {
        textAlign: "center" as const,
        margin: "0",
        color: "grey",
        fontWeight: 400,
        fontSize: "0.7REM"
    }
}