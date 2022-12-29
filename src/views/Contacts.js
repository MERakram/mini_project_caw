import PostsFeed from '../components/PostsFeed';

const Contacts = ({ contacts }) => {
    return (
        <main className="Posts">
            {contacts.length ? (
                <PostsFeed posts={contacts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Contacts