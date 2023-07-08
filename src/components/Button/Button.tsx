import styles from "./Button.module.css";

interface ButtonProps {
	text: string;
	onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
	return (
		<button type="button" className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
};
