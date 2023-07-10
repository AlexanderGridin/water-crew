import { EntityModel } from "../../models";
import styles from "./Entity.module.css";

interface EntityProps {
	entity: EntityModel;
	showName?: boolean;
}

export const Entity = ({ entity, showName = false }: EntityProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<img src={entity.imgUrl} alt={entity.name} width="150" height="150" />
			</div>

			{showName && <h2 className={styles.title}>{entity.name}</h2>}
		</div>
	);
};
