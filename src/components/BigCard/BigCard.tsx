import { Entity } from "../../mockData";
import { EntityComponent } from "../Entity";

import styles from "./BigCard.module.css";

interface BigCardProps {
	entities: Entity[];
}

export const BigCard = ({ entities }: BigCardProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<ul className={styles.list}>
					{entities.map((entity: Entity) => (
						<li key={entity.id} className={styles.listItem}>
							<EntityComponent entity={entity} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
