import axios from "axios"
 export const editPost= async (name, content, id)=>{
  
const res = await axios.put(`/api/post/${id}`,{name:name, content:content})

return res
}
export const deletePost= async (id)=>{
   const res = await axios.delete(`/api/post/${id}`)
   return res
}

