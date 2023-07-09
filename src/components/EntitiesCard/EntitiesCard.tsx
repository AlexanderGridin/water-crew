import { EntityModel } from "../../models";
import { Entity } from "../Entity";

import styles from "./EntitiesCard.module.css";

interface EntitiesCardProps {
	entities: EntityModel[];
}

export const EntitiesCard = ({ entities }: EntitiesCardProps) => {
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
			</div>
		</div>
	);
};
