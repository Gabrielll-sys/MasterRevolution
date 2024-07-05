import axios from "axios";
import { url } from "../api/webApiUrl";



   export const getAllMateriais = async()=>{

      return await axios.get(`${url}/Materiais`).then(r=>{

         return r.data
 
  })
   }

 