import random from "random";
import { entities } from "../mockData";
import { EntityModel } from "../models";

export const pickRandomUniqueEntities = (amount: number): EntityModel[] => {
	if (!amount) {
		return [];
	}

	const map = new Map();

	while (map.size !== amount) {
		const entity = random.choice(entities) as EntityModel;
		map.set(entity.id, entity);
	}

	return Array.from(map.values());
};
