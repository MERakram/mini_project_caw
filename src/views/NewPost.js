const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody, postDate, setPostDate
}) => {
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Subject:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Description:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                  <label htmlFor="postDate">Date:</label>
                <input
                    id="postDate"
                    type="date"
                    required
                    value={postDate}
                    onChange={(e) => setPostDate(e.target.value)}
                />
                <button type="submit">Add Post</button>
            </form>
        </main>
    )
}

export default NewPost
