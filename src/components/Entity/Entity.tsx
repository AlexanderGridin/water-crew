import { EntityModel } from "../../models";
import styles from "./Entity.module.css";

interface EntityProps {
	entity: EntityModel;
	showName?: boolean;
}

export const Entity = ({ entity, showName = false }: EntityProps) => {
	console.log(entity.imgUrl);
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.image}
				style={{
					// backgroundColor: entity.color,
					backgroundImage: `url(${entity.imgUrl})`,
				}}
			></div>

			{showName && <h2 className={styles.title}>{entity.name}</h2>}
		</div>
	);
};
