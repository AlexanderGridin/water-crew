import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EntityModel } from "../../models";
import { randomlyPickEntities } from "../../utils";
import { gamePhase, GamePhase } from "../../staticData";
import { pickRandomUniqueEntities } from "../../utils/pickRandomUniqueEntities";

export interface GameRoundState {
	entities: EntityModel[];
	userEntities: EntityModel[];
	isInProgress: boolean;
	userTotalScore: number;
	userTotalSelections: number;
	userCorrectSelections: number;
	userIncorrectSelections: number;
	phase: GamePhase;
}

const initialState: GameRoundState = {
	entities: [],
	userEntities: [],
	isInProgress: false,
	userTotalScore: 0,
	userTotalSelections: 0,
	userCorrectSelections: 0,
	userIncorrectSelections: 0,
	phase: gamePhase.NONE,
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
			state.isInProgress = false;

			let totalSelections = 0;
			let correctSelections = 0;
			let incorrectSelections = 0;

			state.userEntities = state.userEntities.map((userEntity) => {
				if (!userEntity.isSelected) {
					return userEntity;
				}

				totalSelections++;

				const isEntityExistInEntities = state.entities.find(
					(entity) => entity.id === userEntity.id
				);

				if (isEntityExistInEntities) {
					correctSelections++;

					return {
						...userEntity,
						isCorrectSelection: true,
					};
				}

				incorrectSelections++;

				return {
					...userEntity,
					isIncorrectSelection: true,
				};
			});

			state.userTotalSelections = totalSelections;
			state.userCorrectSelections = correctSelections;
			state.userIncorrectSelections = incorrectSelections;

			state.userTotalScore =
				state.userTotalScore + (correctSelections - incorrectSelections);
		},

		startRound: (state: GameRoundState) => {
			state.isInProgress = true;
			state.entities = pickRandomUniqueEntities(10);

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

		resetRoundStatistics: (state: GameRoundState) => {
			state.userCorrectSelections = 0;
			state.userIncorrectSelections = 0;
		},

		setPhase: (state: GameRoundState, action: PayloadAction<GamePhase>) => {
			state.phase = action.payload;
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
	resetRoundStatistics,
	setPhase,
} = gameRoundSlice.actions;

export const gameRoundReducer = gameRoundSlice.reducer;
