import { CircularProgress } from "@mui/material";
import { ButtonProps } from "../types/components";

const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>
      {isLoading ? <CircularProgress color="inherit" size={18} /> : children}
    </button>
  );
};

export default Button;
