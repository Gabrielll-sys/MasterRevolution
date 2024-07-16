import axios from "axios";
import { url } from "../api/webApiUrl";



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