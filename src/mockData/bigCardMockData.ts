export interface Entity {
	id: string;
	name: string;
	color: string;
}

const colors = ["red", "blue", "pink", "yellow", "violet", "magenta", "cyan"];

export const bigCardMockData: Entity[] = colors.map(
	(color: string, index: number) => ({
		id: index.toString(),
		name: `Entity ${index}`,
		color,
	})
);
