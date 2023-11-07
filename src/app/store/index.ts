import { ActionReducerMap } from "@ngrx/store";
import { IVersionInitialState, versionReducer } from "./version/version.reducer";
import { IPhotoInitialState, photoReducer } from "./photo/photo.reducer";


export interface IAppState {
    versionState: IVersionInitialState,
    photoState: IPhotoInitialState
}

export const AppReducer: ActionReducerMap<IAppState> = {
    versionState: versionReducer,
    photoState: photoReducer
}
