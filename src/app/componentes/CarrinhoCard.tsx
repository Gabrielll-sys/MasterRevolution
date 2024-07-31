import IProduto from '@/interfaces/IProduto'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'
import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import imagem from "../assets/disjuntor-bipolar.jpg"
import { Card } from '@nextui-org/react'
import QuantityManagerCart from './QuantityManagerCart'
import IconCartX from '../assets/icons/IconCartX'

type CarrinhoCardProps = {
    produto:IProduto,
    onDeleteProdutoCarrinho : (id:number)=>void
}

export default function CarrinhoCard({produto,onDeleteProdutoCarrinho}:CarrinhoCardProps, ) {
  
  const handleDelete = ()=>{
    if(produto.id != undefined){

      onDeleteProdutoCarrinho(produto.id)
    }

  }
  
  
  
  return (
    <Flex direction="row" gapX="7" justify="center">
        <Card className=' h-[150px] w-[150px] border-none border-white bg-none'>
        <Image   alt="Card background" className={` transition-transform object-cover w-full h-full   `} fill  src={imagem} />

        </Card>

    <Text className='max-w-[230px]'>{produto.descricao}</Text>
        <QuantityManagerCart/>

        <Flex direction="column" gapY="4" minWidth="300px">

          <Flex direction="row" gap='6' justify="end">
          <Text>Preço Unitário:</Text>
          <Text>R${produto?.precoVenda?.toFixed(2).toString().replace('.',',')}</Text>
          </Flex>

          <Flex direction="row" gap='6' justify="end">
          <Text>Subtotal:</Text>
          <Text>R${produto?.precoVenda?.toFixed(2).toString().replace('.',',')}</Text>
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
