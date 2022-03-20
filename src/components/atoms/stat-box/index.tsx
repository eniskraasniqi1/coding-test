import styles from "./box.module.scss";

interface BoxProps {
  label: string;
  value: string | number | undefined;
}

const Box = ({ label, value }: BoxProps) => (
  <div className={styles.statBox}>
    <span>{value}</span>
    <span>{label}</span>
  </div>
);

export default Box;
