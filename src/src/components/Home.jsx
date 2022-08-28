import Welcome from "./Welcome.jsx";
import Post from "./Post.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPost } from "../state/post.js";

const Home = () => {
  const dispatch = useDispatch();
  const posts =  useSelector((state) => state.post);
  console.log(posts)
  useEffect(() => {
    dispatch(allPost());
  }, []);
  return (
    <>
      <Welcome />
    {posts && posts?.map((post)=>{
        return <Post post={post}/>
    })}
    </>
  );
};

export default Home;
