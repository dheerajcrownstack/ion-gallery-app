import { IAction } from "src/app/types";

export enum PhotoActionEnum {
    GET_ALL_PHOTOS = "getAllPhotos",
    STORE_PHOTOS = "storePhoto"
}

export class GetAllPhotos implements IAction {
    readonly type = PhotoActionEnum.GET_ALL_PHOTOS
}

export class StorePhoto implements IAction {
    readonly type = PhotoActionEnum.STORE_PHOTOS
    constructor(
        public payload: any
    ) {}
}

export type PhotoActions = GetAllPhotos | StorePhoto
