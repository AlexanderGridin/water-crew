import { useGameRoundSelector } from "../../store/selectors";
import styles from "./UserStats.module.css";

export const UserStats = () => {
	const totalScore = useGameRoundSelector("userTotalScore");

	return (
		<div className={styles.wrapper}>
			<b>Total score: </b> {totalScore}
		</div>
	);
};
