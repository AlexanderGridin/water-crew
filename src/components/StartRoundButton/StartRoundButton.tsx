import styles from "./StartRoundButton.module.css";

interface StartRoundButtonProps {
	onClick: () => void;
}

export const StartRoundButton = ({ onClick }: StartRoundButtonProps) => {
	return (
		<button type="button" onClick={onClick} className={styles.button}>
			Start next round
		</button>
	);
};
