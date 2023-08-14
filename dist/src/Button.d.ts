import React from "react";
type ButtonProps = {
    clickCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
