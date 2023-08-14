import React,{ memo } from "react";

type ButtonProps = {
  clickCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = memo(({ clickCallback }) => {
  return (
    <button type="button" onClick={(e) => clickCallback(e)}>
      Get random user
    </button>
  );
});

export default Button;
