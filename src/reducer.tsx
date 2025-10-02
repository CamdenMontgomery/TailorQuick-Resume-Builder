import type { UnknownAction } from "redux";
import type TQTranscript from "./interfaces/TQTranscript";

const initialState: TQTranscript = {
    education: [],
    experience: []
}

export default function rootReducer(state: TQTranscript = initialState, action: UnknownAction): TQTranscript {
    switch (action.type) {
        case "ADD_EDUCATION":
            return {...state, education: [...state.education, {school:"Empty"}]}
        default:
            return state;
    }
}


