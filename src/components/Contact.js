import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
    return (
        <article className="post">
            <Link to={`/contact/${contact.id}`}>
                <h2>{contact.name}</h2>
                <p className="postDate">{contact.phoneNumber}</p>
            
            </Link>
            {/* <p className="postBody">{
                (contact.email).length <= 25
                    ? contact.email
                    : `${(contact.email).slice(0, 25)}...`
            }</p> */}
                <p className="postDate">{contact.email}</p>
        </article>
    )
}

export default Contact