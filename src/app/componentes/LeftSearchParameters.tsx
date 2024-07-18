import { Box, Flex, Slider, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import IconCurrencyReal from '../assets/icons/IconCurrencyReal'

export default function LeftSearchParameters({onFilterChange}) {
  
    const[minValueProduct,setMinValueProduct] = useState(0)
    const[maxValueProduct,setMaxValueProduct] = useState(10000)

    const handleValueChange = (values: number[]) => {
        setMinValueProduct(values[0]);
        setMaxValueProduct(values[1]);
    }
    return (
    <Box maxWidth="800px">

    <Flex direction="column" wrap="wrap" width="200px" gap="4">
  
    <Slider  defaultValue={[minValueProduct, maxValueProduct]} onValueChange={handleValueChange} />

            <Flex direction="row" gap="4">
                <TextField.Root  size="3" className="w-[100px]" variant="classic">
                    <TextField.Slot>
                <IconCurrencyReal height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <TextField.Root  size="3" className="w-[100px]" variant="classic">
                    <TextField.Slot>
                <IconCurrencyReal height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
            </Flex>

            <Flex direction="column">
                
                        {minValueProduct}
                        {maxValueProduct}
            </Flex>

    </Flex>

    </Box>
  )
}
