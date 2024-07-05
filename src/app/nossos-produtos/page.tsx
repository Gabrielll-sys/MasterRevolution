'use client'
import { getAllMateriais } from "@/app/services/Material.Services";
import IMaterial from "@/interfaces/IMaterial";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProdutoCard from "../componentes/ProdutoCard";








export default function NossosProdutos()
{
const [materias,setMateriais] = useState<IMaterial[]>()


useEffect(()=>{

    const getMaterias = async()=>{


        const res =  await getAllMateriais()
        console.log(res)
        setMateriais(res)

    }

     getMaterias()


},[])


return(

    <div className="flex flex-row flex-wrap">
    {materias?.map((material)=>(
        <ProdutoCard produto={material}/>

    ))}

    </div>
)


}













