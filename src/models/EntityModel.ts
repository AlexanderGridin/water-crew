import { generateId } from "../utils";

interface EntityModelConfig {
	color?: string;
	imgUrl?: string;
	name?: string;
}

export class EntityModel {
	public id: string;
	public uniqueId = "";
	public name: string;
	public color: string;
	public isSelected = false;
	public isCorrectSelection = false;
	public isIncorrectSelection = false;
	public imgUrl: string;

	constructor({ color = "", name, imgUrl = "" }: EntityModelConfig) {
		this.id = generateId();
		this.name = name || `Entity with empty name. ID: ${this.id}`;
		this.color = color;
		this.imgUrl = imgUrl;
	}
}
