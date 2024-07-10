"use client"

import { useRouter } from "next/navigation";

import Image from "next/image";
import IconBag from "../assets/icons/IconBag";



 const Header= ()=>{

    const route = useRouter()
    
    return(
        <>
      <div className=" flex flex-row w-[100%] justify-evenly border-b-grayLine border-b-1 items-center  " >

        <div className=" flex flex-row justify-between" >
          <Image  className="py-5 hover:scale-30 max-sm:mt-1 max-sm:w-[100px] max-sm:h-[80px] w-[150px] h-[125px]" src={require('../assets/logo_preta_sem_fundo.png')}alt="logo master" />
        </div>

       <IconBag width={"1.7em"} height={"1.7em"} className="cursor-pointer"/>

      </div>


        </>
    )


}
export default Header;