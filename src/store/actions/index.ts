import { ActionType } from "../action-types"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface LoginAction {
    type: ActionType.LOGIN,
    payload: string
}

export type Action = DepositAction | LoginAction