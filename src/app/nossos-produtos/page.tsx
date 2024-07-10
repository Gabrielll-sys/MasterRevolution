'use client'
import { getAllMateriais } from "@/app/services/Material.Services";
import IMaterial from "@/interfaces/IMaterial";
import { useEffect, useState } from "react";
import ProdutoCard from "../componentes/ProdutoCard";
import LPGrid from "../componentes/PresentationGrid";








export default function NossosProdutos()
{
const [materias,setMateriais] = useState<IMaterial[]>()





return(
    <>
    <div className="flex flex-row flex-wrap bg-[#FCDDCA] h-[300px] items-center justify-center ">
   
   <h1 className="text-4xl"> Nosso Portifólio De Produtos</h1>

    </div>

    <div>

        <LPGrid/>

    </div>
</>

)


}













