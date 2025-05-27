import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Container from "./Container";

function Footer() {
  return (
    <footer className="text-white py-8 px-4 bg-primary">
      <Container>
        <div className="flex md:flex-row-reverse justify-between items-center flex-col gap-2">
          <div className="flex gap-2 cursor-pointer text-2xl">
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaFacebook />
          </div>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@sbtglobal.com</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
