import random from "random";
import { entities } from "../mockData";
import { EntityModel } from "../models";
import { generateId } from "./generateId";

export const randomlyPickEntities = (amount: number): EntityModel[] => {
	if (!amount) {
		return [];
	}

	const result: EntityModel[] = [];

	for (let i = 0; i < amount; i++) {
		const entity = random.choice(entities) as EntityModel;
		result.push({
			...entity,
			uniqueId: generateId(),
		});
	}

	return result;
};
