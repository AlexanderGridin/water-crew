import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EntitiesCard } from "../../components/EntitiesCard";
import { GameRoundModal } from "../../components/GameRoundModal";
import { PageWrapper } from "../../components/PageWrapper";
import { StartRoundButton } from "../../components/StartRoundButton";
import { Timer } from "../../components/Timer";
import { UserCards } from "../../components/UserCards";
import { UserStats } from "../../components/UserStats";
import { timer } from "../../services/timer";
import { gamePhase } from "../../staticData";
import { useGameRoundSelector } from "../../store/selectors/useGameRoundSelector";
import {
	checkRound,
	openModal,
	setPhase,
	startRound,
} from "../../store/slices";

export const GamePage = () => {
	const dispatch = useDispatch();
	const isGameRoundInProgress = useGameRoundSelector("isInProgress");
	const phase = useGameRoundSelector("phase");

	const entities = useGameRoundSelector("entities");
	const userEntities = useGameRoundSelector("userEntities");

	useEffect(() => {
		dispatch(setPhase(gamePhase.REMEMBERING));
		dispatch(startRound());

		timer.start(10 * 1000);
	}, [dispatch]);

	const handleTimerDone = useCallback(() => {
		switch (phase) {
			case gamePhase.REMEMBERING:
				dispatch(setPhase(gamePhase.GUESSING));
				timer.start(10 * 1000);

				break;

			case gamePhase.GUESSING:
				dispatch(setPhase(gamePhase.CHECK_RESULTS));
				dispatch(checkRound());
				dispatch(openModal("gameRoundModal"));

				break;
		}
	}, [phase, dispatch]);

	return (
		<PageWrapper>
			<UserStats />
			<Timer onDone={handleTimerDone} />
			{!isGameRoundInProgress && <StartRoundButton />}

			<div style={{ paddingTop: "45px" }}>
				<EntitiesCard entities={entities} />
			</div>

			<UserCards entities={userEntities} />
			<GameRoundModal />
		</PageWrapper>
	);
};
