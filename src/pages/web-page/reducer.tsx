//import type { UnknownAction } from "redux";
import type TQTranscript from "../../shared/interfaces/TQTranscript";
import StorageService from "../../shared/services/storageService";
import type { Action } from "../../shared/types/Action";


const initialState: TQTranscript = {
    profile: { firstName: "", lastName: "", email: "", phone: "" },
    education: [{ school: "", field: "", degree: "" }],
    experience: [],
    projects: [],
    skills: []
}

export default function rootReducer(state: TQTranscript = initialState, action: Action): TQTranscript {
    console.log(action)
    switch (action.type) {

        //SETTER
        case "SET_TRANSCRIPT":
            state = action.payload.transcript
            break;


        //ADD SUBSECTION ACTIONS

        case "ADD_EDUCATION":
            state = { ...state, education: [...state.education, { school: "", degree: "", field: "" }] }
            break

        case "ADD_EXPERIENCE":
            state = { ...state, experience: [...state.experience, { position: "", company: "" }] }
            break

        case "ADD_PROJECTS":
            state = { ...state, projects: [...state.projects, { title: "" }] }
            break



            
        //REMOVE SUBSECTION ACTIONS

        case "REMOVE_EDUCATION":
            const copy = { ...state }
            copy.education.splice(action.payload.index, 1)
            state = copy
            break

        case "REMOVE_EXPERIENCE":
            state = { ...state, experience: [...state.experience, { position: "", company: "" }] }
            break

        case "REMOVE_PROJECT":
            state = { ...state, projects: [...state.projects, { title: "" }] }
            break


        //EDIT EDUCATION SUBSECTION FIELD ACTIONS


        case "EDIT_EDUCATION_SCHOOL": {
            const copy = { ...state }
            copy.education[action.payload.index].school = action.payload.value
            state = copy
            break
        }

        case "EDIT_EDUCATION_DEGREE": {
            const copy = { ...state }
            copy.education[action.payload.index].degree = action.payload.value
            state = copy
            break
        }

        case "EDIT_EDUCATION_FIELD": {
            const copy = { ...state }
            copy.education[action.payload.index].field = action.payload.value
            state = copy
            break
        }

        case "EDIT_EDUCATION_START_DATE": {
            const copy = { ...state }
            copy.education[action.payload.index].startDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_EDUCATION_END_DATE": {
            const copy = { ...state }
            copy.education[action.payload.index].endDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_EDUCATION_BULLETS": {
            const copy = { ...state }
            console.log(copy)
            copy.education[action.payload.index].bullets = action.payload.value
            state = copy
            break
        }



        //EDIT EXPERIENCE SUBSECTION FIELD ACTIONS


        case "EDIT_EXPERIENCE_POSITION": {
            const copy = { ...state }
            copy.experience[action.payload.index].position = action.payload.value
            state = copy
            break
        }

        case "EDIT_EXPERIENCE_COMPANY": {
            const copy = { ...state }
            copy.experience[action.payload.index].company = action.payload.value
            state = copy
            break
        }

        case "EDIT_EXPERIENCE_START_DATE": {
            const copy = { ...state }
            copy.experience[action.payload.index].startDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_EXPERIENCE_END_DATE": {
            const copy = { ...state }
            copy.experience[action.payload.index].endDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_EXPERIENCE_BULLETS": {
            const copy = { ...state }
            copy.experience[action.payload.index].bullets = action.payload.value
            state = copy
            break
        }



        //EDIT PROJECT SUBSECTION FIELD ACTIONS


        case "EDIT_PROJECT_TITLE": {
            const copy = { ...state }
            copy.projects[action.payload.index].title = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROJECT_START_DATE": {
            const copy = { ...state }
            copy.projects[action.payload.index].startDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROJECT_END_DATE": {
            const copy = { ...state }
            copy.projects[action.payload.index].endDate = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROJECT_BULLETS": {
            const copy = { ...state }
            copy.projects[action.payload.index].bullets = action.payload.value
            state = copy
            break
        }



        //EDIT PROFILE SUBSECTION FIELD ACTIONS


        case "EDIT_PROFILE_FIRST_NAME": {
            const copy = { ...state }
            copy.profile.firstName = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_LAST_NAME": {
            const copy = { ...state }
            copy.profile.lastName = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_EMAIL": {
            const copy = { ...state }
            copy.profile.email = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_PHONE": {
            const copy = { ...state }
            copy.profile.phone = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_GITHUB": {
            const copy = { ...state }
            copy.profile.github = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_LINKEDIN": {
            const copy = { ...state }
            copy.profile.linkedin = action.payload.value
            state = copy
            break
        }

        case "EDIT_PROFILE_PORTFOLIO": {
            const copy = { ...state }
            copy.profile.portfolio = action.payload.value
            state = copy
            break
        }







        //Skill Section Actions

        case "ADD_SKILL":{
            if (state.skills.includes(action.payload.value.toLowerCase())) return state //If skill list already includes it, return immediately to avoid unneccesary rerender and storage update
            const copy = { ...state }
            copy.skills.push(action.payload.value.toLowerCase())
            state = copy
            break
        }

        case "REMOVE_SKILL":{
            const copy = { ...state }
            copy.skills.splice(copy.skills.indexOf(action.payload.value.toLowerCase()), 1)
            state = copy
            break
        }

        default: break;
    }
    
    StorageService.store(state)
    return state
}


