import IProduto from '@/interfaces/IProduto'
import { Flex } from '@radix-ui/themes'
import React from 'react'
import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import imagem from "../assets/disjuntor-bipolar.jpg"
import { Card } from '@nextui-org/react'

type CarrinhoCardProps = {
    produto:IProduto
}

export default function CarrinhoCard({produto}:CarrinhoCardProps) {
  return (
    <Flex direction="row" gap="6">
        <Card className=' h-[250px] w-[40%]'>
        <Image   alt="Card background" className={` transition-transform object-cover w-full h-full `} fill  src={imagem} />

        </Card>

    <Text>{produto.descricao}</Text>
        
    </Flex>
  )
}
