import ContactFeed from '../components/ContactFeed';

const Contacts = ({ contacts }) => {
    return (
        <main className="Posts">
            {contacts.length ? (
                <ContactFeed Contacts={contacts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No contacts to display.
                </p>
            )}
        </main>
    )
}

export default Contacts