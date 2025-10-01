import type { UnknownAction } from "redux";
import type TQTranscript from "./interfaces/TQTranscript";

const initialState: TQTranscript = {

}

export default function rootReducer(state: TQTranscript = initialState, action: UnknownAction): TQTranscript {
    switch (action.type) {
        default:
            return state;
    }
}


