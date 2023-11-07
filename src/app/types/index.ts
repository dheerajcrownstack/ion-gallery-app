import { Action } from "@ngrx/store";


export interface IAction extends Action {
    payload?: any
}

export interface IVersionPayload {
    version: string
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}
