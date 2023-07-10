import { EntityModel } from "../../models";
import { gamePhase } from "../../staticData";
import { useGameRoundSelector } from "../../store/selectors";
import { Entity } from "../Entity";

import styles from "./EntitiesCard.module.css";

interface EntitiesCardProps {
	entities: EntityModel[];
}

export const EntitiesCard = ({ entities }: EntitiesCardProps) => {
	const phase = useGameRoundSelector("phase");
	const isHidden = phase === gamePhase.GUESSING;

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<ul className={styles.list}>
					{entities.map((entity: EntityModel) => (
						<li key={entity.uniqueId} className={styles.listItem}>
							<Entity entity={entity} />
						</li>
					))}
				</ul>

				{isHidden && <div className={styles.backdrop}></div>}
			</div>
		</div>
	);
};
