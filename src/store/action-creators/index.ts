import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch ({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}
