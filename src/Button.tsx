import React, { memo } from "react";
import styles from "./styles/styles.module.scss";

type ButtonProps = {
  clickCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = memo(({ clickCallback }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={(e) => clickCallback(e)}
    >
      Get random user
    </button>
  );
});

export default Button;
