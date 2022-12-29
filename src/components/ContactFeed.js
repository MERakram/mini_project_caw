import Contact from "./Contact";

const ContactFeed = ({ Contacts }) => {
    return (
        <>
            {Contacts.map(contact => (
                <Contact key={contact.id} post={contact} />
            ))}
        </>
    )
}

export default ContactFeed
