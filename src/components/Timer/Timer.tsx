import { useEffect, useRef, useState } from "react";
import { timer } from "../../services/timer";
import styles from "./Timer.module.css";

interface TimerProps {
	onDone: () => void;
}

export const Timer = ({ onDone }: TimerProps) => {
	const [time, setTime] = useState(0);
	const isTimerInitialized = useRef<boolean>(false);

	useEffect(() => {
		if (!isTimerInitialized.current) {
			timer.on("tick", (ms: number) => {
				setTime(Math.ceil(ms / 1000));
			});

			isTimerInitialized.current = true;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		timer.on("done", onDone);

		return () => {
			timer.off("done", onDone);
		};
	}, [onDone]);

	return (
		<div className={styles.timer}>
			<div>{time < 10 ? `00:0${time}` : `00:${time}`}</div>
		</div>
	);
};
