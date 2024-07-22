import axios from "axios";
import { url } from "../api/webApiUrl";





export const getMaterialById = async(id:number)=>{

   return await axios.get(`${url}/Materiais/${id}`).then(r=>{

      return r.data

})
}

   export const getAllMateriais = async()=>{

      return await axios.get(`${url}/Materiais`).then(r=>{

         return r.data
 
  })
   }

 
   export const searchByDescription = async (descricao:string) => {

      if(descricao.length){
 
         return await axios
        .get(`${url}/Inventarios/buscaDescricaoInventario?descricao=${descricao.split("#").join(".")}`)
        .then( (r)=> {
    
         return r.data
         
        })
 
     }
 
    }

    export const getDescricaoProdutoDaRota = (descricao:string)=>{

   
      return descricao.includes("%20")? descricao.slice(descricao.lastIndexOf("/")+1,descricao.length-1).split("%20").join(" "):descricao.slice(descricao.lastIndexOf("/")+1,descricao.length-1)



    }