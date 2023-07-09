import random from "random";
import { mockEntities } from "../mockData";
import { EntityModel } from "../models";
import { generateId } from "./generateId";

export const randomlyPickEntities = (amount: number): EntityModel[] => {
	const result: EntityModel[] = [];

	if (amount) {
		for (let i = 0; i < amount; i++) {
			const entity = random.choice(mockEntities) as EntityModel;
			result.push({
				...entity,
				uniqueId: generateId(),
			});
		}
	}

	return result;
};
