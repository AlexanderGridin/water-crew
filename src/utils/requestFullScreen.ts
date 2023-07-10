export const requestFullScreen = () => {
	if (!document.body.requestFullscreen) {
		return;
	}

	document.body.requestFullscreen();
};
