import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";

export const rootReducer = combineReducers({
    data: newsReducer,
})

export type RootState = ReturnType<typeof rootReducer>