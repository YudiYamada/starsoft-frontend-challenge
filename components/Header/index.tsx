import Image from "next/image";
import logo from "../../public/images/logo.png";
import { HeaderComponent } from "./styles";
import CartTrigger from "../CartTrigger";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderComponent>
      <Link href="/" aria-label="Ir para a página inicial">
        <Image
          src={logo}
          alt="Logo da StarSoft NFT"
          width={101}
          height={38}
          priority
        />
      </Link>
      <div>
        <CartTrigger />
      </div>
    </HeaderComponent>
  );
};

export default Header;
