import { IAction, IVersionPayload } from "src/app/types";

export enum VersionActionEnum {
    GET_APP_VERSION = "getAppVersion",
    SET_APP_VERSION = "setAppVersion"
}


export class GetAppVersion implements IAction {
    readonly type = VersionActionEnum.GET_APP_VERSION
}

export class SetAppVersion implements IAction {
    readonly type = VersionActionEnum.SET_APP_VERSION
    constructor(
        public payload: IVersionPayload
    ) {}
}

export type VersionActions = GetAppVersion | SetAppVersion;
