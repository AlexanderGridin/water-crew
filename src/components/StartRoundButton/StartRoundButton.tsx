import { useDispatch } from "react-redux";
import { timer } from "../../services/timer";
import { gamePhase } from "../../staticData";
import { setPhase, startRound } from "../../store/slices";

import styles from "./StartRoundButton.module.css";

export const StartRoundButton = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setPhase(gamePhase.REMEMBERING));
		dispatch(startRound());
		timer.start(10 * 1000);
	};

	return (
		<button type="button" onClick={handleClick} className={styles.button}>
			Start next round
		</button>
	);
};
