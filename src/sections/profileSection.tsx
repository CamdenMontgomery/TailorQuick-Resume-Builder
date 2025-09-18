import { forwardRef, useEffect, useState } from "react";
import StorageService from "../services/storageService";




const ProfileSection =  forwardRef<HTMLDivElement, {}>(({}, ref) => {
    
        const [profile, setProfile] = useState<{first: string, last: string, phone: string, email: string, linkedin: string, github: string}>({first: "", last:"", phone: "", email: "", linkedin: "", github: ""})
    
        const updateProfile = (newData: any) => {
            setProfile(newData);
            StorageService.storeSectionData("profile", newData)
        };
        
    
    
        useEffect(() => {
            //Fill With Storage Data On Mount
            StorageService.getBlocklistData("profile").then((res) => {
                setProfile(res)
            })
        }, [])
    
    
    return (
        <div style={styles.sectionContainer}>
            <h2 ref={ref} style={styles.title}>PROFILE</h2>
            <p style={styles.subtitle}>List your relevant info.</p>

            <div style={styles.inputContainer}>
                <label style={styles.label}>First Name</label>
            <input
                type="text"
                placeholder="John"
                value={profile.first}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, first: e.target.value })}
            />
            </div>

                        <div style={styles.inputContainer}>
                <label style={styles.label}>Last Name</label>
            <input
                type="text"
                placeholder="Doe"
                value={profile.last}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, last: e.target.value })}
            />
            </div>

                        <div style={styles.inputContainer}>
                <label style={styles.label}>Phone</label>
            <input
                type="text"
                placeholder="000-000-0000"
                value={profile.phone}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, phone: e.target.value })}
            />
            </div>

                        <div style={styles.inputContainer}>
                <label style={styles.label}>Email</label>
            <input
                type="text"
                placeholder="Field"
                value={profile.email}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, email: e.target.value })}
            />
            </div>

                        <div style={styles.inputContainer}>
                <label style={styles.label}>Linkedin (Optional)</label>
            <input
                type="text"
                placeholder="Field"
                value={profile.linkedin}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, linkedin: e.target.value })}
            />
            </div>

                        <div style={styles.inputContainer}>
                <label style={styles.label}>Github (Optional)</label>
            <input
                type="text"
                placeholder="Field"
                value={profile.github}
                maxLength={50}
                style={styles.input}
                onChange={(e) => updateProfile({ ...profile, github: e.target.value })}
            />
            </div>

        </div>
    );
})

export default ProfileSection;



const styles = {
    sectionContainer: {
          display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem"
    },
    blockContainer: {

    },
    title: {
        paddingTop: "50px",
        fontWeight: "900",
        color: "rgb(147 0 0)",
        fontSize: "x-large",
        gridColumn: "1 / 3",
        margin: 0
    },
    subtitle: {
          fontSize: "larger",
  letterSpacing: "1px",
  textTransform: "capitalize" as const,
  color: "gray",
  fontWeight: 200,
  gridColumn: "1 / 3",
  margin: 0
    },input: {
        borderRadius: "5px",
        borderWidth: "0.5px",
        padding: "14px",
        borderColor: "rgb(255 255 255)",
        borderStyle: "solid",
        background: "#f9f9f9"
    },inputContainer: {
  display: "flex",
  flexDirection: "column" as const,
    marginTop: "10px"
    }, label: {
          padding: "10px",
  fontWeight: "bolder",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  color: "#3d3d3d"
    }

}