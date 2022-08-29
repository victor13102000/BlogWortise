import { Button } from "@mui/material";
import { useState } from "react";
import { editPost } from "../services/posts.services";
import useInput from "../Hooks/useInputs";
import { deletePost } from "../state/post";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const MyPost = ({ info }) => {
   const navigate= useNavigate()
  const {  post } = info;
  const [editBoolean, setEditBolean] = useState(false);
  const content = useInput();
  const name = useInput();

  const editFunction = (e) => {
    e.preventDefault();
    editBoolean === false && setEditBolean(true);
  };

  return (
    <article className="post">
      {editBoolean === false ? (
        <>
          <ul>
            <li>
              <Button onClick={editFunction}>Edit</Button>
            </li>
            <li>
              <Button onClick={()=> {deletePost(post.id)
            navigate('/')
            }}>Delete</Button>
            </li>
          </ul>
          <h2>{post.name} </h2>

          <p>
            {post.content}
          </p>
        </>
      ) : (
        <>
          {" "}
          <form>
            <input
              {...name}
              type={"text"}
              placeholder={"edit the name of the article"}
            />{" "}
            <br />
            <input
              {...content}
              type={"text"}
              placeholder={"edit the article content"}
            />
            <br />
            <Button onClick={() =>{ return editPost(name.value, content.value, post.id)} }>
              save changes
            </Button>
          </form>
        </>
      )}
    </article>
  );
};
export default MyPost;
