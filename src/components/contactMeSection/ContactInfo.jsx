import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="webd2276@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+92 302 34 87 168" Image={FiPhone} />
      <SingleInfo text="Karachi, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
