const NewContact = ({
    handleSubmit, contactName, setContactName, contactPhoneNumber, setContactPhoneNumber, contactEmail, setContactEmail, 
}) => {
    return (
        <main className="NewPost">
            <h2>New Contact</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="contactName">Name:</label>
                <input
                    id="contactName"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                />
                   <label htmlFor="contactPhoneNumber">Phone Number:</label>
                <input
                    id="contactPhoneNumber"
                    type="text"
                    required
                    value={contactPhoneNumber}
                    onChange={(e) => setContactPhoneNumber(e.target.value)}
                />
                   <label htmlFor="contactEmail">Email:</label>
                <input
                    id="contactEmail"
                    type="text"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                />
                
                <button type="submit">Add Contact</button>
            </form>
        </main>
    )
}

export default NewContact