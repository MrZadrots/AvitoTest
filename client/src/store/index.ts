import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { newsReducer } from './reducers/newsReducer'


export const store = configureStore({
    reducer:{
        data: newsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch