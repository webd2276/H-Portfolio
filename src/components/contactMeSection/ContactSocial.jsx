import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/hamza-qadeer-830671348" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/webd2276" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/webd2276/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
