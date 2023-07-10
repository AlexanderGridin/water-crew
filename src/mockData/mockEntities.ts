import { EntityModel, Fish } from "../models";
import { fishes } from "../staticData";

export const entities: EntityModel[] = fishes.map((fish: Fish) => ({
	...new EntityModel({
		name: fish.name,
		imgUrl: `/assets/fishes-imgs/${fish.code}.jpg`,
	}),
}));
