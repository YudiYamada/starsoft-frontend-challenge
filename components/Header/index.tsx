import Image from "next/image";
import logo from "../../public/images/logo.png";
import bag from "../../public/images/bag.png";
import { CartContainerComponent, HeaderComponent } from "./styles";


const Header = () => {
  return (
    <HeaderComponent>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <CartContainerComponent>
        <Image src={bag} alt="bag" />
        <span>0</span>
      </CartContainerComponent>
    </HeaderComponent>
  );
};

export default Header;
