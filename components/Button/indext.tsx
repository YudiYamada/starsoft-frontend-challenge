import { ButtonComponent } from "./styles";

interface ButtonProps {
  text: string;
  $variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ text, $variant = "primary", disabled = false, onClick }: ButtonProps) => {
  return <ButtonComponent $variant={$variant} disabled={disabled} onClick={onClick}>{text}</ButtonComponent>;
};

export default Button;
