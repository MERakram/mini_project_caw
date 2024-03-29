import Nav from './components/Nav';
import Posts from './views/Posts';
import NewPost from './views/NewPost';
import PostPage from './views/PostPage';
import Missing from './views/Missing';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import NewContact from "./views/NewContact";
import ContactPage from './views/ContactPage';
import {myposts} from "./data/myposts.js";
import {mycontacts} from "./data/mycontacts.js";

function App() {
    const [posts, setPosts] = useState(myposts)
    const [contacts, setContacts] = useState(mycontacts)
    const [search, setSearch] = useState('');
    const [postsSearchResults, setPostsSearchResults] = useState([]);
    const [contactsSearchResults, setContactsSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [contactName, setContactName] = useState('');
    const [postBody, setPostBody] = useState('');
    const [postDate, setPostDate] = useState('');
    const [contactPhoneNumber, setContactPhoneNumber] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const history = useHistory();

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase())
            || ((post.datetime).toLowerCase()).includes(search.toLowerCase()));

        setPostsSearchResults(filteredResults.reverse());
    }, [posts, search])
    useEffect(() => {
        const filteredResults = contacts.filter((contact) =>
            ((contact.name).toLowerCase()).includes(search.toLowerCase())
            || ((contact.phoneNumber).toLowerCase()).includes(search.toLowerCase())
            || ((contact.email).toLowerCase()).includes(search.toLowerCase()));

        setContactsSearchResults(filteredResults.reverse());
    }, [contacts, search])

    const handleAddPost = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {id, title: postTitle, datetime : postDate, body: postBody};
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        setPostDate('');
        history.push('/posts');
    }
    const handleAddContact = (e) => {
        e.preventDefault();
        const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
        const newContact = {id, name: contactName, phoneNumber: contactPhoneNumber, email: contactEmail};
        const allContacts = [...contacts, newContact];
        setContacts(allContacts);
        setContactName('');
        setContactPhoneNumber('');
        setContactEmail('');
        history.push('/contacts');
    }
    const deletePost = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        history.push('/posts');
    }
    const deleteContact = (id) => {
        const contactsList = contacts.filter(contact => contact.id !== id);
        setContacts(contactsList);
        history.push('/contacts');
    }
    return (
        <div className="App">
            <Nav search={search} setSearch={setSearch}/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/posts">
                    <Posts posts={postsSearchResults}/>
                </Route>
                <Route exact path="/addPost">
                    <NewPost
                        handleSubmit={handleAddPost}
                        postTitle={postTitle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
                        postDate={postDate}
                        setPostDate={setPostDate}
                    />
                </Route>
                <Route exact path="/addContact">
                    <NewContact
                        handleSubmit={handleAddContact}
                        contactName={contactName}
                        setContactName={setContactName}
                        contactPhoneNumber={contactPhoneNumber}
                        setContactPhoneNumber={setContactPhoneNumber}
                        contactEmail={contactEmail}
                        setContactEmail={setContactEmail}
                    />
                </Route>
                <Route path="/post/:id">
                    <PostPage posts={posts} handleDelete={deletePost}/>
                </Route>
                <Route path="/contacts">
                    <Contacts contacts={contactsSearchResults}/>
                </Route>
                <Route path="/contact/:id">
                    <ContactPage contacts={contacts} handleDelete={deleteContact}/>
                </Route>
                <Route path="*" component={Missing}/>
            </Switch>
        </div>
    );
}

export default App;