import { forwardRef } from "react";




const ProfileSection =  forwardRef<HTMLDivElement, {}>(({}, ref) => {
    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>PROFILE</h2>
            <p style={styles.subtitle}>List your relevant info.</p>

            <input type="text"></input>
            <input type="phone"></input>
            <input type="email"></input>

        </div>
    );
})

export default ProfileSection;



const styles = {
    sectionContainer: {

    },
    blockContainer: {

    },
    title: {
        paddingTop: "50px",
        fontWeight: "900",
        color: "rgb(147 0 0)",
        fontSize: "x-large"
    },
    subtitle: {
          fontSize: "larger",
  letterSpacing: "1px",
  textTransform: "capitalize" as const,
  color: "gray",
  fontWeight: 200
    }

}