import React from "react";
import Image from "next/image";

type Props = {};

const Addbanner = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-7 justify-around p-[30px] bg-[#0cc0ee]">
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <Image alt="img" src="/images/loc.png" width={30} height={30} />
          <a className="text-black font-extrabold text-center text-[20px]">
            Address
          </a>
        </div>
        <div className=" text-center text-wrap">
          <p className="text-black">
            Unavar Food Inspection and Certification Private Limited, <br />{" "}
            Flat no. F1, First Floor, Door No :519, MM Illam, MKN Road, <br />{" "}
            Adambakkam Village, Alandur, Chennai - 600016{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <Image alt="img" src="/images/wp.png" width={30} height={30} />
          <a className="text-black font-extrabold text-[20px]">Whatsapp</a>
        </div>
        <div className="text-center text-wrap">
          <p className="text-black">+91 8838870687</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <Image alt="img" src="/images/mail.png" width={30} height={30} />
          <a className="text-black font-extrabold text-[20px]">Email</a>
        </div>
        <div className="text-center text-wrap">
          <p className="text-black">admin@unavar.com</p>
        </div>
      </div>
    </div>
  );
};
export default Addbanner;
