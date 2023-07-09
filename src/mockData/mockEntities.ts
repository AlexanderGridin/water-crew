import { EntityModel } from "../models";

const colors = ["red", "blue", "pink", "yellow", "violet", "magenta", "cyan"];

export const mockEntities: EntityModel[] = colors.map(
	(color: string, index: number) => ({
		...new EntityModel({ color, name: `Entity ${index}` }),
	})
);
