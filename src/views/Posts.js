import PostsFeed from '../components/PostsFeed';

const Posts = ({ posts }) => {
    return (
        <main className="Posts">
            {posts.length ? (
                <PostsFeed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Posts
