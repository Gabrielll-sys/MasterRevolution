"use client"



import Image from "next/image";
import IconBag from "../assets/icons/IconBag";
import { useContext, useState } from "react";
import CarrinhoContextProvider, { CarrinhoContext } from "../contexts/CarrinhoContext";
import { Button, Input } from "@nextui-org/react";
import { TextField } from "@radix-ui/themes";
import IconMagnifyingGlass from "../assets/icons/IconMagnifyingGlass";


 const Header= ()=>{
  const [text,setText] = useState("")
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
            <Image  className="py-5 hover:scale-30 max-sm:mt-1 max-sm:w-[100px] max-sm:h-[80px] w-[190px] h-[155px]" src={require('../assets/logo-master-store.png')}alt="logo master" />
          </div>
          <TextField.Root placeholder="Faça um pesquisa…" size="3" className="w-[600px]" variant="classic" onKeyDown={handleKeyDown} value={text} onChange={(x)=>setText(x.target.value)}>
                <TextField.Slot>
            <IconMagnifyingGlass height="16" width="16" /> 
                </TextField.Slot>
              </TextField.Root>
              <div className="">
                
                   <IconBag width={"1.7em"} height={"1.7em"} className="cursor-pointer"/>
              </div>
                </div>
        </div>


        </>
    )


}
export default Header;