export const gamePhase = {
	NONE: "NONE",
	REMEMBERING: "REMEMBERING",
	GUESSING: "GUESSING",
	CHECK_RESULTS: "CHECK_RESULTS",
} as const;

type ValueOf<T> = T[keyof T];

export type GamePhase = ValueOf<typeof gamePhase>;
