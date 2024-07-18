'use client';
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import whatsAppIcon from "../../app/assets/icon-whatsapp.png"
import IconWhatsapp from "../assets/icons/IconWhatsapp";

export default function SendWhatsAppMessage() {
  
  const route = useRouter();
  
  return (
   <div className="fixed rounded-md left-5 bottom-6 ">
        <Link className=" p-0 rounded-md  " href={`https://api.whatsapp.com/send?phone=71103718&text=Olá Peguei seu contato do site`}
      >
          <IconWhatsapp
           width={"3.2em"}
            height={"3.2em"}
              color="white"
              className="rounded-full bg-green  p-2"
          
          />
        </Link>

   </div>
  );
}