"use client"



import Image from "next/image";
import IconBag from "../assets/icons/IconBag";
import { useContext, useState } from "react";
import CarrinhoContextProvider, { CarrinhoContext } from "../contexts/CarrinhoContext";
import { Button, Input, Link } from "@nextui-org/react";
import { TextField } from "@radix-ui/themes";
import IconMagnifyingGlass from "../assets/icons/IconMagnifyingGlass";
import { Text } from "@radix-ui/themes";

 const Header= ()=>{
  const [text,setText] = useState(2)
  const handleKeyDown =async (event: React.KeyboardEvent<HTMLInputElement>) => {
   
    if (event.key === "Enter") {

      console.log(text)

    }
  };


    
    return(
        <>
      <div className=" flex flex-row w-[100%] justify-around border-b-grayLine border-b-1 items-center  " >

        <div className="flex flex-row w-[80%] items-center justify-center gap-16">
          <div className=" flex flex-row justify-between" >
            <Link href="/">
              <Image  className="py-5 hover:scale-30 max-sm:mt-1 max-sm:w-[100px] max-sm:h-[80px] w-[190px] h-[155px]" src={require('../assets/logo-master-store.png')}alt="logo master" />
            </Link>
          </div>
          <TextField.Root placeholder="Faça um pesquisa…" size="3"  className="w-[600px]" variant="classic" onKeyDown={handleKeyDown} value={text} onChange={(x)=>setText(x.target.value)}>
                <TextField.Slot>
            <IconMagnifyingGlass className="cursor-pointer" height="16" width="16" onClick={()=>console.log("oi")} /> 
                </TextField.Slot>
              </TextField.Root>
              <div className="relative inline-blockc hover:border-1 hover:border-grayLine p-1">
                
                   <IconBag width={"1.7em"} height={"1.7em"} className="cursor-pointer"/>

                   <div className=" absolute bottom-[-13px] right-[-10px] bg-master_yellow rounded-[80px] w-[25px] h-[25px] text-center">
                     <Text className=" text-black text-[13px] ">{text}</Text>
                   </div>
              </div>
                </div>
        </div>


        </>
    )


}
export default Header;