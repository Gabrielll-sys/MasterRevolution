'use client';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import whatsAppIcon from "../../app/assets/whatsapp-chat-button.png"

export default function SendWhatsAppMessage() {
  
  const route = useRouter();
  
  return (
   <div className="absolute right-5 bottom-5">
        <Button className="bg-transparent p-0" onClick={()=>route.push(
      `https://api.whatsapp.com/send?phone=71103718&text=Bom Dia`
    )}>
          <Image
              src={whatsAppIcon}
              alt={`Whatsapp`}
              
              width={80}
              height={80}
              className="cursor-pointer"
          
          />
        </Button>

   </div>
  );
}