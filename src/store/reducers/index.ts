import { combineReducers } from "redux"
import testReducer from "./testReducer"


const rootReducers = combineReducers({
    test: testReducer
})



export default rootReducers

export type State = ReturnType<typeof rootReducers>