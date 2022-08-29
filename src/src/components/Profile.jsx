import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"
import Welcome from './Welcome'
import axios from "axios";
import Post from "./Post";
const Profile = ()=>{
  const {id}=useParams();
  const [userName, setUserName]= useState([])
  const [posts, setPosts]= useState([])
  useEffect( ()=>{
  axios.get(`/api/user/${id}`)
 .then(res=> {
  setUserName(res.data.name)
  setPosts(res.data.posts)
 })
  },[])
return (<>
<Welcome userName={userName}/>
{posts && posts?.map((post, i)=>{
  return <Post key={i} post={post}/>
})}
</>)
}

export default Profile