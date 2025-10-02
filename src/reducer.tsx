//import type { UnknownAction } from "redux";
import type TQTranscript from "./interfaces/TQTranscript";
import type { Action } from "./types/Action";


const initialState: TQTranscript = {
    education: [],
    experience: [],
    projects: [],
    skills: []
}

export default function rootReducer(state: TQTranscript = initialState, action: Action): TQTranscript {
    switch (action.type) {

        case "ADD_EDUCATION":
            return { ...state, education: [...state.education, {school: "", degree: ""}] }

        case "ADD_EXPERIENCE":
            return { ...state, experience: [...state.experience, { position: "", company: "" }] }


        case "EDIT_EDUCATION_SCHOOL": {
            const copy = { ...state }
            copy.education[action.payload.index].school = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_DEGREE":{
            const copy = { ...state }
            copy.education[action.payload.index].degree = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_START_DATE":{
            const copy = { ...state }
            copy.education[action.payload.index].startDate = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_END_DATE":{
            const copy = { ...state }
            copy.education[action.payload.index].endDate = action.payload.value
            return copy
        }

        case "EDIT_EDUCATION_BULLETS":{
            const copy = { ...state }
            console.log(copy)
            copy.education[action.payload.index].bullets = action.payload.value
            return copy
        }

        default: return state;
    }
}


