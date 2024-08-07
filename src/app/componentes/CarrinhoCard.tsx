import IProduto from '@/interfaces/IProduto'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import imagem from "../assets/disjuntor-bipolar.jpg"
import { Card } from '@nextui-org/react'
import QuantityManagerCart from './QuantityManagerCart'
import IconCartX from '../assets/icons/IconCartX'

type CarrinhoCardProps = {
    produto:IProduto ,
    onDeleteProdutoCarrinho : (id:number)=>void
    recalculaTotalCarrinho:()=> void
}

export default function CarrinhoCard({produto,onDeleteProdutoCarrinho,recalculaTotalCarrinho}:CarrinhoCardProps, ) {
  
  const [precoTotal,setPrecoTotal] = useState(produto.precoVenda * produto.quantidade)

const calcularPrecoTotal = (quantidade:number)=>{

  if(produto.precoVenda != undefined )
    {

    setPrecoTotal(produto?.precoVenda * quantidade)

  }
  recalculaTotalCarrinho()
}

  
  const handleDelete = ()=>{
    if(produto.id != undefined){

      onDeleteProdutoCarrinho(produto.id)
      recalculaTotalCarrinho()
    }

  }
  
  
  
  return (
    <Flex direction="row" gapX="7" wrap="wrap" justify="center">
        <Card className=' max-sm:h-[100px] max-sm:w-[100px] h-[150px] w-[150px]  border-none border-white '>
        <Image   alt="Card background" className={` transition-transform object-cover w-full h-full   `} fill loading='lazy' src={imagem} />

        </Card>

    <Text className='max-w-[230px]' size={
      {sm:"1",
        md:"3"
      }
      
      } >{produto.descricao}</Text>
        <QuantityManagerCart produtoId={produto.id} quantidade={produto.quantidade} recalcularTotal={calcularPrecoTotal} />

        <Flex direction="column" wrap="wrap" gapY="4" minWidth="300px">

          <Flex direction="row" gap='6' justify="end">
          <Text>Preço Unitário:</Text>
          <Text>R${produto?.precoVenda?.toFixed(2).toString().replace('.',',')}</Text>
          </Flex>

          <Flex direction="row" gap='6' justify="end">
          <Text>Subtotal:</Text>
          <Text>R${precoTotal.toFixed(2).toString().replace('.',',')}</Text>
          </Flex>

          <Flex direction="row" gap="3">
          <AlertDialog.Root>
                <AlertDialog.Trigger>
                <Button
                  color="crimson"
                  variant="outline"
                  className="hover:opacity-50 text-base"
                 
                >
                  <IconCartX />
                  Excluir item
                </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="450px">
                  <AlertDialog.Title>Excluir produto do carrinho</AlertDialog.Title>
                  <AlertDialog.Description size="2">
                  Tem certeza que deseja excluir o item do seu carrinho?
                  </AlertDialog.Description>

                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <Button variant="soft" color="blue">
                        Cancelar
                      </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <Button variant="solid" color="red" onClick={ handleDelete}>
                        Excluir Item
                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
              
              </Flex>
        </Flex>
        
    </Flex>
  )
}
