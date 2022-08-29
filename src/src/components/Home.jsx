import "../styles/home.css"
import Welcome from "./Welcome.jsx";
import Post from "./Post.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPost } from "../state/post.js";
import Search from "./Search";

const Home = () => {
  const dispatch = useDispatch();
  const posts =  useSelector((state) => state.post);
  useEffect(() => {
    dispatch(allPost());
  }, []);
  return (
    <>
      <Welcome />
      <section className="content">
    {posts && posts?.map((post, i)=>{
        return <Post key={i} post={post}/>
    })}
      </section>
     <Search/>
    </>
  );
};

export default Home;
