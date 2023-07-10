import { entities } from "../mockData";

let counter = 0;

export const preloadImages = async (
	cb?: (loadedImgs: number) => void
): Promise<void> => {
	return new Promise((resolve) => {
		const div = document.createElement("div");
		div.style.display = "none";

		entities.forEach((entity) => {
			const img = new Image();

			img.src = entity.imgUrl;
			img.addEventListener("load", () => {
				counter++;
				cb?.(counter);

				if (counter === entities.length) {
					setTimeout(() => {
						resolve();
					}, 2000);
				}
			});

			div.append(img);
		});

		document.body.append(div);
	});
};
