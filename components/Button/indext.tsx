import { ButtonComponent } from "./styles";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

const Button = ({ text, variant = "primary" }: ButtonProps) => {
  return <ButtonComponent variant={variant}>{text}</ButtonComponent>;
};

export default Button;
