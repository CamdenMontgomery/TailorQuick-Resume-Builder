//import type { UnknownAction } from "redux";
import type TQTranscript from "./interfaces/TQTranscript";
import type { Action } from "./types/Action";


const initialState: TQTranscript = {
    profile: {firstName: "", lastName: "", email: "", phone: ""},
    education: [{school:"",field:"",degree:""}],
    experience: [],
    projects: [],
    skills: []
}

export default function rootReducer(state: TQTranscript = initialState, action: Action): TQTranscript {
    switch (action.type) {

        //ADD SUBSECTION ACTIONS

        case "ADD_EDUCATION":
            return { ...state, education: [...state.education, { school: "", degree: "", field: "" }] }

        case "ADD_EXPERIENCE":
            return { ...state, experience: [...state.experience, { position: "", company: "" }] }

        case "ADD_PROJECTS":
            return { ...state, projects: [...state.projects, { title: "" }] }



        //EDIT EDUCATION SUBSECTION FIELD ACTIONS


        case "EDIT_EDUCATION_SCHOOL": {
            const copy = { ...state }
            copy.education[action.payload.index].school = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_DEGREE": {
            const copy = { ...state }
            copy.education[action.payload.index].degree = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_FIELD": {
            const copy = { ...state }
            copy.education[action.payload.index].field = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_START_DATE": {
            const copy = { ...state }
            copy.education[action.payload.index].startDate = action.payload.value as Date
            return copy
        }

        case "EDIT_EDUCATION_END_DATE": {
            const copy = { ...state }
            copy.education[action.payload.index].endDate = action.payload.value as Date
            return copy
        }

        case "EDIT_EDUCATION_BULLETS": {
            const copy = { ...state }
            console.log(copy)
            copy.education[action.payload.index].bullets = action.payload.value
            return copy
        }



        //EDIT EXPERIENCE SUBSECTION FIELD ACTIONS


        case "EDIT_EXPERIENCE_POSITION": {
            const copy = { ...state }
            copy.experience[action.payload.index].position = action.payload.value
            return copy
        }

        case "EDIT_EXPERIENCE_COMPANY": {
            const copy = { ...state }
            copy.experience[action.payload.index].company = action.payload.value
            return copy
        }

        case "EDIT_EXPERIENCE_START_DATE": {
            const copy = { ...state }
            copy.experience[action.payload.index].startDate = action.payload.value
            return copy
        }

        case "EDIT_EXPERIENCE_END_DATE": {
            const copy = { ...state }
            copy.experience[action.payload.index].endDate = action.payload.value
            return copy
        }

        case "EDIT_EXPERIENCE_BULLETS": {
            const copy = { ...state }
            copy.experience[action.payload.index].bullets = action.payload.value
            return copy
        }



        //EDIT PROJECT SUBSECTION FIELD ACTIONS


        case "EDIT_PROJECT_TITLE": {
            const copy = { ...state }
            copy.projects[action.payload.index].title = action.payload.value
            return copy
        }

        case "EDIT_PROJECT_START_DATE": {
            const copy = { ...state }
            copy.projects[action.payload.index].startDate = action.payload.value
            return copy
        }

        case "EDIT_PROJECT_END_DATE": {
            const copy = { ...state }
            copy.projects[action.payload.index].endDate = action.payload.value
            return copy
        }

        case "EDIT_PROJECT_BULLETS": {
            const copy = { ...state }
            copy.projects[action.payload.index].bullets = action.payload.value
            return copy
        }



        //EDIT PROFILE SUBSECTION FIELD ACTIONS


        case "EDIT_PROFILE_FIRST_NAME": {
            const copy = { ...state }
            copy.profile.firstName = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_LAST_NAME": {
            const copy = { ...state }
            copy.profile.lastName = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_EMAIL": {
            const copy = { ...state }
            copy.profile.email = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_PHONE": {
            const copy = { ...state }
            copy.profile.phone = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_GITHUB": {
            const copy = { ...state }
            copy.profile.github = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_LINKEDIN": {
            const copy = { ...state }
            copy.profile.linkedin = action.payload.value
            return copy
        }

        case "EDIT_PROFILE_PORTFOLIO": {
            const copy = { ...state }
            copy.profile.portfolio = action.payload.value
            return copy
        }

        default: return state;
    }
}


