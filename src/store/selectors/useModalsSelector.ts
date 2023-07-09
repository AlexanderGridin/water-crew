import { useSelector } from "react-redux";
import { ModalsState } from "../slices";
import { RootState } from "../store";

export const useModalsSelector = (key: keyof ModalsState) => {
	// TODO: Remove any!!!
	return useSelector((state: RootState) => state.modals[key] as any);
};
