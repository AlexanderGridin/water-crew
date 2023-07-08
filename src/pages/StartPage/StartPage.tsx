import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageWrapper } from "../../components/PageWrapper";

import styles from "./StartPage.module.css";

export const StartPage = () => {
	const navigate = useNavigate();

	const handleStartClick = () => {
		if (document.body.requestFullscreen) {
			document.body.requestFullscreen();
			navigate("/game");
			return;
		}

		alert("Full screen mode is not supported in your browser...");
	};

	return (
		<PageWrapper>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 style={{ marginBottom: "25px" }}>Start Page</h1>
					<Button text="Start" onClick={handleStartClick} />
				</div>
			</div>
		</PageWrapper>
	);
};
