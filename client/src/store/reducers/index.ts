import { combineReducers } from "redux";
import { newsReducer, newReducer } from "./newsReducer";

export const rootReducer = combineReducers({
    data: newsReducer,
    new: newReducer
})

export type RootState = ReturnType<typeof rootReducer>