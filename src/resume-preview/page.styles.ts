const styles: { [k: string]: React.CSSProperties } = {
  container: {
    fontFamily: `"Times New Roman", serif`,
    fontSize: "clamp(10px, 1.2vw, 14px)", // responsive scaling
    lineHeight: 1.3,
    color: "#000",
    padding: "50px",
    boxSizing: "border-box",
    transformOrigin: "left top",
    width: "612px",
    height: "791px",
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



export default styles;