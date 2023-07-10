import { useEffect, useRef, useState } from "react";
import { timer } from "../../services/timer";
import styles from "./Timer.module.css";

interface TimerProps {
	onDone: () => void;
}

export const Timer = ({ onDone }: TimerProps) => {
	const [time, setTime] = useState(0);
	const prevOnDone = useRef<null | (() => void)>(null);
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
		if (prevOnDone.current) {
			timer.off("done", prevOnDone.current);
		}

		prevOnDone.current = onDone;

		timer.on("done", onDone);
	}, [onDone]);

	return (
		<div className={styles.timer}>
			<div>{time}</div>
		</div>
	);
};
