"use client"

import { useRouter } from "next/navigation";

import Image from "next/image";



 const Header= ()=>{

    const route = useRouter()
    
    return(
        <>
      <div className=" flex flex-row w-full justify-center border-b-grayLine border-b-1 items-center gap-4 " >

        <div className=" flex flex-row justify-between" >
          <Image  className="py-5 hover:scale-30 max-sm:mt-1 max-sm:w-[100px] max-sm:h-[80px] w-[150px] h-[125px]" src={require('../assets/logo_preta_sem_fundo.png')}alt="logo master" />
        </div>

        <div className="gap-3 flex flex-row">
          <a href="" className="text-base">Nosso Portifólio</a>
          <a href="nossos-produtos" className="text-base">Nossos Produtos</a>
        </div>

      </div>


        </>
    )


}
export default Header;