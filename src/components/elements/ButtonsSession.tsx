import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ButtonContact from "./ButtonContact";

export default function ButtonsSession() {
  return (
    <div
      className="
        flex flex-col items-center gap-3
        shadow-md rounded-xl shadow-black/30
        py-6 px-6 sm:px-10 md:px-16 lg:px-20
        w-full max-w-md mx-auto
      "
    >
      <ButtonContact
        text="Whatsapp"
        href="https://wa.me/+5585999688000"
        icon={<FaWhatsapp className="!h-6 !w-6" />}
      />

      <ButtonContact
        text="Instagram"
        href="https://www.instagram.com/soraiafelixbusiness/"
        icon={<FaInstagram className="!h-6 !w-6" />}
      />

      <ButtonContact
        text="E-mail"
        href="#"
        icon={<SiGmail className="!h-5 !w-5" />}
      />

      <ButtonContact
        text="Linkedin"
        href="https://www.linkedin.com/in/soraiaf%C3%A9lix?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        icon={<FaLinkedinIn className="!h-5 !w-5" />}
      />
    </div>
  );
}
