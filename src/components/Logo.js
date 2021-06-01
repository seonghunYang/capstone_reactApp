import { Link, Image } from "@chakra-ui/react";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width="70px"
        src={logo}
        alt="I SEA logo"
      />
    </Link>
    
  );
}