import { Entity, mockUserCards } from "../../mockData";
import { EntityComponent } from "../Entity";
import styles from "./UserCards.module.css";

export const UserCards = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{mockUserCards.map((card: Entity) => (
					<li key={card.id} className={styles.listItem}>
						<div>
							<EntityComponent entity={card} showName />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
