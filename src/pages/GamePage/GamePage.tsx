import { BigCard } from "../../components/BigCard";
import { PageWrapper } from "../../components/PageWrapper";
import { Timer } from "../../components/Timer";
import { UserCards } from "../../components/UserCards";
import { bigCardMockData } from "../../mockData";

export const GamePage = () => {
	return (
		<PageWrapper>
			<Timer />

			<div style={{ paddingTop: "45px" }}>
				<BigCard entities={bigCardMockData} />
			</div>

			<UserCards />
		</PageWrapper>
	);
};
