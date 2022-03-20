import React from "react";

import styles from "./not-found.module.scss";

interface NotFoundProps {
  text?: string;
}

const NotFound = ({
  text = "Hmmm, that page does not exist...",
}: NotFoundProps) => (
  <div className={styles.notFoundContainer}>
    <h1>404</h1>
    <h2>{text}</h2>
  </div>
);

export default NotFound;
