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
  borderWidth: "0px",
  background: "#00000000"
    },
    icon: {
  borderRadius: "500px",
  width: "-webkit-fill-available" as const,
  aspectRatio: "1 / 1",
  color: "white",
  textAlign: "center" as const,
  display: "flex",
  justifyContent: "center" as const,
  alignItems: "center" as const,
  fontSize: "large" as const,
  fontWeight: "bold" as const,
  lineHeight: "24px",
  margin: "8px",
  boxShadow: "inset #00000036 4px -6px 6px 0"
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