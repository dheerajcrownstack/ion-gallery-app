import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPhotoInitialState } from "./photo.reducer";

const getPhotoState = createFeatureSelector<IPhotoInitialState>('photoState');

export const getPhotos = createSelector(getPhotoState, (state) => state.photos);
