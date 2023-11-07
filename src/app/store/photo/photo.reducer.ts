import { IAction, UserPhoto } from "src/app/types"
import { PhotoActionEnum } from "./photo.action";

export interface IPhotoInitialState {
    photos: UserPhoto[]
}

const initialState: IPhotoInitialState = {
    photos: []
}

export const photoReducer = (state: IPhotoInitialState = initialState, action: IAction): IPhotoInitialState => {
    switch (action.type) {
        case PhotoActionEnum.GET_ALL_PHOTOS:
            return {
                ...state
            }
        
        case PhotoActionEnum.STORE_PHOTOS:
            const allPhotos = [...state.photos];
            allPhotos.unshift(action.payload.photo);
            return {
                ...state,
                photos: allPhotos
            }
    
        default:
            return state
    }
}
