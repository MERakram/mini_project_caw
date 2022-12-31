import Nav from './components/Nav';
import Posts from './views/Posts';
import NewPost from './views/NewPost';
import PostPage from './views/PostPage';
import Missing from './views/Missing';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import NewContact from "./views/NewContact";
import { myposts } from "./data/myposts.js";
import { mycontacts } from "./data/mycontacts.js";

function App() {
    const [posts, setPosts] = useState(myposts)
    const [contacts, setContacts] = useState(myposts)
    const [search, setSearch] = useState('');
    const [postsSearchResults, setPostsSearchResults] = useState([]);
    const [contactSearchResults, setContactsSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [contactBody, setContactBody] = useState('');
    const history = useHistory();

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setPostsSearchResults(filteredResults.reverse());
    }, [posts, search])
    useEffect(() => {
        const filteredResults = contacts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setContactsSearchResults(filteredResults.reverse());
    }, [contacts, search])

    const handleAddPost = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {id, title: postTitle, datetime, body: postBody};
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        history.push('/posts');
    }
    const handleAddContact = (e) => {
        e.preventDefault();
        const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newContact = {id, title: contactTitle, datetime, body: contactBody};
        const allContacts = [...contacts, newContact];
        setContacts(allContacts);
        setContactTitle('');
        setContactBody('');
        history.push('/contacts');
    }
    const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        history.push('/');
    }

    return (
        <div className="App">
            {/*<Header title="React JS Blog" />*/}
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
                    />
                </Route>
                <Route exact path="/addContact">
                    <NewContact
                        handleSubmit={handleAddContact}
                        postTitle={contactTitle}
                        setPostTitle={setContactTitle}
                        postBody={contactBody}
                        setPostBody={setContactBody}
                    />
                </Route>
                <Route path="/post/:id">
                    <PostPage posts={posts} handleDelete={handleDelete}/>
                </Route>
                <Route path="/contacts">
                    <Contacts contacts={contactSearchResults}/>
                </Route>
                <Route path="*" component={Missing}/>
            </Switch>
        </div>
    );
}

export default App;