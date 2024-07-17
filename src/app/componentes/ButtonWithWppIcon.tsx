'use client';
import { Button } from "@nextui-org/react";
import Image from "next/image";

import whatsAppIcon from "../../app/assets/icon-whatsapp.png"
import IconWhatsapp from "../assets/icons/IconWhatsapp";

export default function ButtonWithWppIcon() {
  

  
  return (

        <Button startContent={<IconWhatsapp width={"1.4em"} height={"1.4em"} color="green" />} className="bg-transparent p-6 rounded-md  border-1 border-green text-[18px]  text-green">
        Falar com atendente
        </Button>


  );
}