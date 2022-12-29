import Post from './Post';

const PostsFeed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default PostsFeed
