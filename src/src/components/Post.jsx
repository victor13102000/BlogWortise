import '../styles/posts.css'
const Post  = ({post})=>{

  return (<article className="post">
    {post.user?.name ? <h2>{`${post.name} written by ${post.user.name}`}</h2> : <h2>{`${post.name}`}</h2>
    }
    <p>{post.content}</p>
  </article>)
}

export default Post 