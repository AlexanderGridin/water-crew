import { EntityModel } from "../../models";
import styles from "./Entity.module.css";

interface EntityProps {
	entity: EntityModel;
	showName?: boolean;
}

export const Entity = ({ entity, showName = false }: EntityProps) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.image}
				style={{
					backgroundColor: entity.color,
				}}
			></div>

			{showName && <h2 className={styles.title}>{entity.name}</h2>}
		</div>
	);
};
