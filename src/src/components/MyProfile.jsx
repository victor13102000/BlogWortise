import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyPost from "./MyPost";


const MyProfile = () => {
  let user = useSelector((state) => state.user);
  const posts = user.posts;
useEffect(()=>{

},[user])

  return <>
  {posts?.map((post,i)=>{
    return <MyPost key={i} info={{post, user}}/>
  })}</>
};

export default MyProfile;
