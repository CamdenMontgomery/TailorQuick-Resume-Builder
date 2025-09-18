export default function HistorySidebar() {
    return (
        <div style={styles.sidebar}>
            <h1 style={styles.header}>Resume History</h1>

            <span style={styles.selection}><b style={styles.smallHeader}>Aug. 2024</b><br></br>Start your software engineer job description with a two to three sentence description of the role and most important responsibilities so candidates can determine whether they are interested in the work and have the necessary skills.

                About Our Workplace: Now show why your company is a great place to work. For example, you could describe the company culture, mission, values, and commitment to professional development.

                Software Engineer Roles and Responsibilities: Use this section of your software engineer job description to share the day-to-day responsibilities. Be comprehensive so candidates can decide whether they are excited about the work and have the right skills.

                Develops information systems by designing, developing, and installing software solutions.
                Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.
                Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.
                Investigates problem areas.
                Follows the software development lifecycle.
                Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.
                Prepares and installs solutions by determining and designing system specifications, standards, and programming.
                Improves operations by conducting systems analysis and recommending changes in policies and procedures.
                Obtains and licenses software by obtaining required information from vendors, recommending purchases, and testing and approving products.
                Protects operations by keeping information confidential.
                Provides information by collecting, analyzing, and summarizing development and service issues.
                Accomplishes engineering and organization mission by completing related results as needed.
                [Work Hours & Benefits] Use this section of your software engineer job description to discuss the work hours and benefits like a 401(k) with matching, paid time off, paid parental leave, health insurance, and dental insurance. Also be sure to share compelling perks like remote work, a flexible schedule, tuition reimbursement, bonuses, and stock options. Next, share the salary range for the role so candidates can determine if they want to apply.

                Software Engineer Qualifications and Skills: Use these sections of your software engineer job description to list the preferred and required qualifications and skills. For example, you could include:

                Analyzing information
                General programming skills
                Software design
                Software debugging
                Software documentation
                Software testing
                Problem solving
                Teamwork
                Software development fundamentals
                Software development process
                Software requirements
                Education, Experience, and Licensing Requirements:

                Bachelor’s and/or master’s degree in computer science, computer engineering, or related technical discipline
                5+ years of professional software development experience
                Proficiency in Java or C++, and object-oriented design skills
                Application architecture and design patterns
                Experience serving as technical lead throughout the full software development lifecycle, from conception, architecture definition, detailed design, scoping, planning, implementation, testing to documentation, delivery and maintenance is preferred
                Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations
                Experience in development of distributed/scalable systems and high-volume transaction applications</span>
        
            <textarea style={styles.input}placeholder="Enter Job Desc."></textarea>
        </div>
    )
}


const styles = {
    sidebar: {
  width: "30%",
  background: "#060606",
  height: "100%",
  boxShadow: "#00000063 -1px 1px 9px 0"
    },
    input: {
  margin: "20px",
  padding: "10px",
  borderRadius: "4px",
  border: "none",
  background: "rgb(47, 47, 47)",
  fontSize: "small",
  boxShadow: "rgba(0, 0, 0, 0.31) 0px 0px 5px 0px inset",
  height: "151px",
  minWidth: "-webkit-fill-available",
  width: "8px"
    },
    selection:{
          maxHeight: "49px",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "#ffffff36 0 0 10px 0",
  margin: "27px",
  color: "white",
  display: "block",
  border: "solid black 10px",
  fontSize: "smaller",
  fontWeight: 100,
  textTransform: "capitalize" as const,
  textOverflow: "ellipsis"
    },
    header: {
        color: "white", margin: "24px"
    },
    smallHeader:{
fontSize: "small"
    }
}