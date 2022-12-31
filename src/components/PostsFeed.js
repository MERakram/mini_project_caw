import Post from './Post';
import { Link } from 'react-router-dom';
import {AiOutlineCaretUp } from "react-icons/ai"


const PostsFeed = ({ posts }) => {
    return (
        <>
            <Link to="/addPost"><button className='btn'>Add Post</button></Link>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
             <Link to="/"><button className='btn'><AiOutlineCaretUp  className='icon' /> </button></Link>
          

           
                  
        </>
    )
}

export default PostsFeed
