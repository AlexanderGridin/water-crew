import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EntityModel } from "../../models";
import { randomlyPickEntities } from "../../utils";

export interface GameRoundState {
	entities: EntityModel[];
	userEntities: EntityModel[];
}

const initialState: GameRoundState = {
	entities: [],
	userEntities: [],
};

export const gameRoundSlice = createSlice({
	name: "[GAME_ROUND]",
	initialState,
	reducers: {
		setEntities: (
			state: GameRoundState,
			action: PayloadAction<EntityModel[]>
		) => {
			state.entities = action.payload;
		},

		setUserEntities: (
			state: GameRoundState,
			action: PayloadAction<EntityModel[]>
		) => {
			state.userEntities = action.payload;
		},

		selectEntity: (
			state: GameRoundState,
			action: PayloadAction<EntityModel>
		) => {
			const isEntitiySelected = state.userEntities.find(
				(entity) => entity.id === action.payload.id && entity.isSelected
			);

			if (isEntitiySelected) {
				return;
			}

			state.userEntities = state.userEntities.map((entity) =>
				entity.uniqueId === action.payload.uniqueId
					? {
							...action.payload,
							isSelected: true,
					  }
					: entity
			);
		},

		deselectEntity: (
			state: GameRoundState,
			action: PayloadAction<EntityModel>
		) => {
			state.userEntities = state.userEntities.map((entity) =>
				entity.uniqueId === action.payload.uniqueId
					? {
							...action.payload,
							isSelected: false,
					  }
					: entity
			);
		},

		checkRound: (state: GameRoundState) => {
			state.userEntities = state.userEntities.map((userEntity) => {
				if (!userEntity.isSelected) {
					return userEntity;
				}

				const isEntityExistInEntities = state.entities.find(
					(entity) => entity.id === userEntity.id
				);
				if (isEntityExistInEntities) {
					return {
						...userEntity,
						isCorrectSelection: true,
					};
				}

				return {
					...userEntity,
					isIncorrectSelection: true,
				};
			});
		},

		startRound: (state: GameRoundState) => {
			state.entities = randomlyPickEntities(10);

			if (!state.userEntities.length) {
				state.userEntities = randomlyPickEntities(5);
				return;
			}

			const selectedEntities = state.userEntities.filter(
				(entity) => entity.isSelected
			);
			const unselectedEntities = state.userEntities.filter(
				(entity) => !entity.isSelected
			);

			const newEntities = randomlyPickEntities(selectedEntities.length);
			state.userEntities = [...unselectedEntities, ...newEntities];
		},
	},
});

export const {
	setEntities,
	setUserEntities,
	selectEntity,
	deselectEntity,
	checkRound,
	startRound,
} = gameRoundSlice.actions;
export const gameRoundReducer = gameRoundSlice.reducer;
