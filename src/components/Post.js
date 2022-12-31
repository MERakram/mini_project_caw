import { Link } from 'react-router-dom';
import {useState} from 'react';
import {AiOutlineComment, AiFillHeart } from "react-icons/ai"

const Post = ({ post }) => {
    const [co,Setco]=useState(0);
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }</p>
            <AiFillHeart onClick={()=>Setco(co+1)} className='icon' /><label htmlFor=''>{co}</label>
            <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
           
        </article>
    )
}

export default Post

