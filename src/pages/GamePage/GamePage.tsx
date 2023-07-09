import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EntitiesCard } from "../../components/EntitiesCard";
import { PageWrapper } from "../../components/PageWrapper";
import { Timer } from "../../components/Timer";
import { UserCards } from "../../components/UserCards";
import { timer } from "../../services/timer";
import { useGameRoundSelector } from "../../store/selectors/useGameRoundSelector";
import { checkRound, startRound } from "../../store/slices";

export const GamePage = () => {
	const dispatch = useDispatch();

	const entities = useGameRoundSelector("entities");
	const userEntities = useGameRoundSelector("userEntities");

	useEffect(() => {
		dispatch(startRound());

		timer.start(10 * 1000);
	}, [dispatch]);

	const handleTimerDone = () => {
		dispatch(checkRound());
	};

	return (
		<PageWrapper>
			<Timer onDone={handleTimerDone} />

			<div style={{ paddingTop: "45px" }}>
				<EntitiesCard entities={entities} />
			</div>

			<UserCards entities={userEntities} />
		</PageWrapper>
	);
};
