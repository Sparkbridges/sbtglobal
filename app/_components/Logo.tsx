import Image from "next/image";
import LogoImg from "@/public/sbtglobal-logo-clean.png";

function Logo() {
  return <Image src={LogoImg} className="w-16 lg:w-24" alt="SBT Global Logo" />;
}

export default Logo;
