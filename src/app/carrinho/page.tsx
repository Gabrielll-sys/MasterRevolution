'use client'
import IProduto from '@/interfaces/IProduto';
import { Flex } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import CarrinhoCard from '../componentes/CarrinhoCard';

export default function Carrinho() {
  
    const [produtosCarrinho,setProdutosCarrinho] = useState<IProduto[]>([])

  useEffect(()=>{

    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    setProdutosCarrinho(arrItens)

  },[])
  
  
    return (
        <Flex direction="column" width="100vw" justify="center">

            <Flex direction="column" gap="6" justify="center" >

            {produtosCarrinho.map((produto:IProduto)=>(
               
                <CarrinhoCard produto={produto} />

            ))}
            </Flex>


        </Flex>
    
  )
}
