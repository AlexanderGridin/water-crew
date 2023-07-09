import { EntityModel } from "../../models";
import { Entity } from "../Entity/Entity";
import styles from "./EntityCard.module.css";

interface EntityCardProps {
	entity: EntityModel;
	onClick?: () => void;
}

export const EntityCard = ({ entity, onClick }: EntityCardProps) => {
	return (
		<div
			className={`${styles.wrapper} ${
				entity.isSelected ? styles.selected : ""
			} ${entity.isCorrectSelection ? styles.correct : ""} ${
				entity.isIncorrectSelection ? styles.incorrect : ""
			}`}
			onClick={onClick}
		>
			<Entity entity={entity} showName />
		</div>
	);
};
