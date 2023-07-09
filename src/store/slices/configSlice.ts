import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConfigState {
	isFullScreen: boolean;
}

const initialState: ConfigState = {
	isFullScreen: false,
};

export const configSlice = createSlice({
	name: "[CONFIG]",
	initialState,
	reducers: {
		setFullScreen: (state: ConfigState, action: PayloadAction<boolean>) => {
			state.isFullScreen = action.payload;
		},
	},
});

export const { setFullScreen } = configSlice.actions;
export const configReducer = configSlice.reducer;
