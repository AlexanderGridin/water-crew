import { PropsWithChildren } from "react";

import styles from "./PageWrapper.module.css";

interface PageWrapperProps extends PropsWithChildren {}

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};
