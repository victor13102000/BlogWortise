import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../Hooks/useInputs";
import MyPost from "./MyPost";


const MyProfile = () => {
  const navigate= useNavigate()
  let user = useSelector((state) => state.user);
  const [posts, setPosts] = useState([])
  console.log(posts)
  const [bolean, setBolean] = useState(false);
  const content= useInput()
  const articleName= useInput()
 

  const handleBolean = (e) => {
    e.preventDefault();
    (bolean=== false) ? setBolean(true) : setBolean(false)
  };

  const newPost= async(e)=>{
    e.preventDefault();
   await axios.post(`api/post/${user.id}`, {
      name: articleName.value,
      content:content.value
    })
  navigate("/")
  }

  useEffect(() => {
  axios.get(`/api/post/byuser/${user.id}`)
  .then(res=> setPosts(res.data))
  }, []);

  return (
    <div>
      <h1>This is your profile {user.name}</h1>
      <h2>Here you can view, edit, delete and create your articles</h2>
      <br/>
{bolean===true && (<form>
<input type="text"
placeholder="Enter the name of your new article"
{...articleName} />
<br/>
<input type='text'
placeholder={"Content of your article"}
{...content}/>
<br/>
<Button onClick={newPost}>Post</Button>
</form>)}

      <Button onClick={handleBolean}>New article</Button>
      {posts?.map((post, i) => {
        return <MyPost key={i} info={{ post, user }} />;
      })}
    </div>
  );
};

export default MyProfile;
