import { Link, Image } from "@chakra-ui/react";
import logo from "../images/logo2.png";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width="140px" // "70px"
        src={logo}
        alt="I SEA logo"
      />
    </Link>
  );
}