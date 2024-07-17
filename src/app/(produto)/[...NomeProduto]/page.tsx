'use client'
import ProdutoShowcase from "@/app/componentes/ProdutoShowcase";
import { ProdutoContext } from "@/app/contexts/ProdutoContext"
import { Button } from "@nextui-org/react"
import { useContext } from "react"

export default function Produto () {
    const { produto } = useContext(ProdutoContext);

    return (
        <div>
            <Button onClick={() => console.log(produto)}/>
           
            <ProdutoShowcase/>
        </div>
    );
}
