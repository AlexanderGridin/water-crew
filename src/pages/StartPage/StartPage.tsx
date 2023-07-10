import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageWrapper } from "../../components/PageWrapper";
import { setImgsLoadingProgress } from "../../store/slices";
import { preloadImages, requestFullScreen } from "../../utils";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import styles from "./StartPage.module.css";
import { useConfigSelector } from "../../store/selectors";
import { useState } from "react";

export const StartPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isShowProgress, setIsShowProgress] = useState(false);

	const progress = useConfigSelector("imgsLoadingProgress");

	const handleEnableFullScreenClick = () => {
		requestFullScreen();
	};

	const handleStartClick = async () => {
		setIsShowProgress(true);

		await preloadImages((loadedImgs) => {
			dispatch(setImgsLoadingProgress(loadedImgs));
		});

		navigate("/game");
	};

	return (
		<PageWrapper>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 style={{ marginBottom: "25px" }}>Start Page</h1>

					<p>
						<Button
							text="Enable full screen"
							onClick={handleEnableFullScreenClick}
						/>
					</p>

					<p>
						<Button text="Start game" onClick={handleStartClick} />
					</p>

					{isShowProgress && (
						<Box sx={{ width: "100%" }}>
							<p style={{ textAlign: "center" }}>Loading...</p>
							<LinearProgress variant="determinate" value={progress} />
							<p style={{ textAlign: "center" }}>{`${progress}%`}</p>
						</Box>
					)}
				</div>
			</div>
		</PageWrapper>
	);
};
