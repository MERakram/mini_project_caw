import {useParams, Link} from "react-router-dom";

const ContactPage = ({contacts, handleDelete}) => {
    const {id} = useParams();
    const contact = contacts.find(contact => (contact.id).toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {contact &&
                    <>
                        <h2>{contact.name}</h2>
                        <p className="postDate">{contact.phoneNumber}</p>
                        <p className="postBody">{contact.email}</p>
                        <button onClick={() => handleDelete(contact.id)}>
                            Delete contact
                        </button>
                    </>
                }
                {!contact &&
                    <>
                        <h2>contact Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default ContactPage





