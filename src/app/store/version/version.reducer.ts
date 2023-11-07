import { IAction } from "src/app/types"
import { VersionActionEnum } from "./version.action";

export interface IVersionInitialState {
    version: string
}


const initialState: IVersionInitialState = {
    version: ''
}

export const versionReducer = (state: IVersionInitialState = initialState, action: IAction): IVersionInitialState => {
    switch (action.type) {
        case VersionActionEnum.GET_APP_VERSION:
            return {
                ...state
            }

        case VersionActionEnum.SET_APP_VERSION:
            return {
                ...state,
                version: action.payload.version
            }
    
        default:
            return state;
    }
}
