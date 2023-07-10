import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { entities } from "../../mockData";

export interface ConfigState {
	isFullScreen: boolean;
	loadedImages: any[];
	imgsLoadingProgress: number;
	prevOnDone: null | (() => void);
}

const initialState: ConfigState = {
	isFullScreen: false,
	loadedImages: [],
	imgsLoadingProgress: 0,
	prevOnDone: null,
};

export const configSlice = createSlice({
	name: "[CONFIG]",
	initialState,
	reducers: {
		setFullScreen: (state: ConfigState, action: PayloadAction<boolean>) => {
			state.isFullScreen = action.payload;
		},
		setLoadedImages: (state: ConfigState, action: PayloadAction<any[]>) => {
			state.loadedImages = action.payload;
		},
		setImgsLoadingProgress: (
			state: ConfigState,
			action: PayloadAction<number>
		) => {
			const totalEntities = entities.length;
			const loadedImgs = action.payload;
			const progress = Math.floor((loadedImgs * 100) / totalEntities);

			state.imgsLoadingProgress = progress;
		},
		setPrevOnDone: (
			state: ConfigState,
			action: PayloadAction<{ prevOnDone: () => void }>
		) => {
			state.prevOnDone = action.payload.prevOnDone;
		},
	},
});

export const {
	setFullScreen,
	setLoadedImages,
	setImgsLoadingProgress,
	setPrevOnDone,
} = configSlice.actions;

export const configReducer = configSlice.reducer;
