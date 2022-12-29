import { Link } from 'react-router-dom';

const Contact = ({ post: contact }) => {
    return (
        <article className="post">
            <Link to={`/post/${contact.id}`}>
                <h2>{contact.title}</h2>
                <p className="postDate">{contact.datetime}</p>
            </Link>
            <p className="postBody">{
                (contact.body).length <= 25
                    ? contact.body
                    : `${(contact.body).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default Contact
