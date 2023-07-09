import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
	gameRoundModal: boolean;
}

const initialState: ModalsState = {
	gameRoundModal: false,
};

export const modalsSlice = createSlice({
	name: "[CONFIG]",
	initialState,
	reducers: {
		openModal: (
			state: ModalsState,
			action: PayloadAction<keyof ModalsState>
		) => {
			state[action.payload] = true;
		},
		closeModal: (
			state: ModalsState,
			action: PayloadAction<keyof ModalsState>
		) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
