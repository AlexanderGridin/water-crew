import { Entity } from "../../mockData";
import styles from "./Entity.module.css";

interface EntityComponentProps {
	entity: Entity;
	showName?: boolean;
}

export const EntityComponent = ({
	entity,
	showName = false,
}: EntityComponentProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image} style={{ backgroundColor: entity.color }}>
				{entity.id}
			</div>

			{showName && <h2 className={styles.title}>{entity.name}</h2>}
		</div>
	);
};
