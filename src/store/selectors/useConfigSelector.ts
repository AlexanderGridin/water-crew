import { useSelector } from "react-redux";
import { ConfigState } from "../slices";
import { RootState } from "../store";

export const useConfigSelector = (key: keyof ConfigState) => {
	// TODO: remove any!!!
	return useSelector((state: RootState) => state.config[key] as any);
};
