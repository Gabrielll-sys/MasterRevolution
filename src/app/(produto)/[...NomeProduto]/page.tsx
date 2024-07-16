'use client'
import { Button } from "@nextui-org/react"
import { useRouter } from "next/router"


export default function Produto ({produto}:any){

    const router = useRouter()

    const {productName} = router.query

    console.log(productName)

return(
<div>

<Button onClick={()=>console.log(produto)}/>
</div>
    
)




}