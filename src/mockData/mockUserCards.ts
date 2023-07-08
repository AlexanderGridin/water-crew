import { Entity } from "./bigCardMockData";

const colors = ["red", "blue", "pink", "yellow", "violet"];

export const mockUserCards: Entity[] = colors.map(
	(color: string, index: number) => ({
		id: index.toString(),
		name: `Entity ${index}`,
		color,
	})
);
