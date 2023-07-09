import { useDispatch } from "react-redux";
import { EntityModel } from "../../models";
import { useGameRoundSelector } from "../../store/selectors";
import { deselectEntity, selectEntity } from "../../store/slices";
import { EntityCard } from "../EntityCard";
import styles from "./UserCards.module.css";

interface UserCardsProps {
	entities: EntityModel[];
}

export const UserCards = ({ entities }: UserCardsProps) => {
	const isRoundInProgress = useGameRoundSelector("isInProgress");
	const dispatch = useDispatch();

	const handleCardClick = (entity: EntityModel) => () => {
		if (!isRoundInProgress) {
			return;
		}

		if (!entity.isSelected) {
			dispatch(selectEntity(entity));
			return;
		}

		dispatch(deselectEntity(entity));
	};

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{entities.map((entity: EntityModel) => (
					<li key={entity.uniqueId} className={styles.listItem}>
						<EntityCard entity={entity} onClick={handleCardClick(entity)} />
					</li>
				))}
			</ul>
		</div>
	);
};
