import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IVersionInitialState } from "./version.reducer";

const getVersionState = createFeatureSelector<IVersionInitialState>('versionState');

export const getVersion = createSelector(getVersionState, (state) => state.version)

