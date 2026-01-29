import Image from "next/image";
import logo from "../../public/images/logo.png";
import { HeaderComponent } from "./styles";
import CartTrigger from "../CartTrigger";

const Header = () => {
  return (
    <HeaderComponent>
      <div>
        <Image
          src={logo}
          alt="Logo da StarSoft NFT"
          width={101}
          height={38}
          priority
        />
      </div>
      <div>
        <CartTrigger />
      </div>
    </HeaderComponent>
  );
};

export default Header;
