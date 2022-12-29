import Feed from '../components/Feed';

const Posts = ({ posts }) => {
    return (
        <main className="Posts">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Posts
