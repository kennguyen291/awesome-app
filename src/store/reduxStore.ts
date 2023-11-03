
import { configureStore } from "@reduxjs/toolkit"
import rootReducers from "./reducers"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"

export const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk]

}) 