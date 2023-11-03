import { IAuthenticatedUser, IDemoState } from "../../types"
import { Action } from "../actions"
import { ActionType } from "../action-types"

const initialState = 0

const initialUser = {
    email: "",
    name: ""
}

const testReducer = (state: number = initialState, action: Action) => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload
        default: return state
    }
}
export default testReducer