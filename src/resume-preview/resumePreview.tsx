import { useRef } from "react"
import Page from "./page"

export default function ResumePreview({data}: {data : {}}) {
    const containerRef = useRef(null)
    return (
        <div ref={containerRef} style={styles.container}>
            <Page data={data} parentRef={containerRef}></Page>
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