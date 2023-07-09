import { useSelector } from "react-redux";
import { GameRoundState } from "../slices";
import { RootState } from "../store";

export const useGameRoundSelector = (key: keyof GameRoundState) => {
	// TODO: remove any!!!
	return useSelector((state: RootState) => state.gameRound[key] as any);
};
