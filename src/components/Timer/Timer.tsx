import { useEffect, useState } from "react";
import { timer } from "../../services/timer";
import styles from "./Timer.module.css";

let isTimerInitialized = false;

interface TimerProps {
	onDone: () => void;
}

export const Timer = ({ onDone }: TimerProps) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!isTimerInitialized) {
			timer.on("tick", (ms: number) => {
				setTime(Math.ceil(ms / 1000));
			});

			timer.on("done", onDone);

			isTimerInitialized = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.timer}>
			<div>{time}</div>
		</div>
	);
};
