import Contact from "./Contact";
import {Link} from 'react-router-dom';
import {AiOutlineCaretUp} from "react-icons/ai"

const ContactFeed = ({Contacts}) => {
    return (
        <>
            <Link to="/addContact">
                <button className='btn'>Add Contact</button>
            </Link>
            {Contacts.map(contact => (
                <Contact key={contact.id} contact={contact}/>
            ))}
            <Link to="/">
                <button className='btn'><AiOutlineCaretUp className='icon'/></button>
            </Link>
        </>
    )
}

export default ContactFeed