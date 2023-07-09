import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useGameRoundSelector, useModalsSelector } from "../../store/selectors";
import { closeModal, resetRoundStatistics } from "../../store/slices";
import { Button } from "../Button";
import styles from "./GameRoundModal.module.css";

export const GameRoundModal = () => {
	const dispatch = useDispatch();

	const isOpen = useModalsSelector("gameRoundModal");
	const totalScore = useGameRoundSelector("userTotalScore");
	const totalSelected = useGameRoundSelector("userTotalSelections");
	const correctSelections = useGameRoundSelector("userCorrectSelections");
	const incorrectSelections = useGameRoundSelector("userIncorrectSelections");

	const handleStartNextRoundClick = () => {
		dispatch(closeModal("gameRoundModal"));
		dispatch(resetRoundStatistics());
	};

	return (
		<Modal open={isOpen} onClose={() => {}}>
			<div className={styles.content}>
				<h1>Round statistic</h1>

				<div>
					<p>
						<b>Total selected: </b>
						{totalSelected}
					</p>
					<p className={styles.correct}>
						<b>Correct selections: </b>
						{correctSelections}
					</p>
					<p className={styles.incorrect}>
						<b>Incorrect selections: </b> {incorrectSelections}
					</p>
				</div>

				<div>
					<p className={styles.total}>
						<b>Toal score: </b>
						{totalScore}
					</p>
				</div>

				<Button text="Close" onClick={handleStartNextRoundClick} />
			</div>
		</Modal>
	);
};
