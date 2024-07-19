import { Box, Button, Flex, Slider, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import IconCurrencyReal from '../assets/icons/IconCurrencyReal'
import IconTrash from '../assets/icons/IconTrash'

export default function LeftSearchParameters({onFilterChange}) {
  
    const[minValueProduct,setMinValueProduct] = useState(0)
    const[maxValueProduct,setMaxValueProduct] = useState(1000000)

    const handleValueChange = (values: number[]) => {
        setMinValueProduct(values[0]);
        setMaxValueProduct(values[1]);
    }
    return (
    <Box maxWidth="800px">

    <Flex direction="column" wrap="wrap" width="200px" gap="5">
  
            <Button variant="surface" className='text-[18px] cursor-pointer'>
                <IconTrash height="20" width="20" /> Limpar Filtros
            </Button>
            <Text>Busque por preços</Text>
        <Slider  defaultValue={[minValueProduct, maxValueProduct]} color='yellow' onValueChange={handleValueChange} />

            <Flex direction="row" gap="4" >

                <TextField.Root  size="3" className="w-[100px]" variant="classic" value={minValueProduct}>
                    <TextField.Slot>
                <IconCurrencyReal height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <TextField.Root  size="3" className="w-[100px]" variant="classic" value={maxValueProduct}>
                    <TextField.Slot>
                <IconCurrencyReal height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Button  variant="soft" size="3">
                    OK
                </Button>
            </Flex>

            <Flex direction="column">
                
                        {minValueProduct}
                        {maxValueProduct}
            </Flex>

    </Flex>

    </Box>
  )
}
