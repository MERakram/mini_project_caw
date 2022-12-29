import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Posts from './views/Posts';
import NewPost from './views/NewPost';
import PostPage from './views/PostPage';
import Missing from './views/Missing';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import Contacts from "./views/Contacts";
import Home from "./views/Home";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "My First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 2,
            title: "My 2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 3,
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 4,
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 5,
            title: "My Fifth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
    ])
    const [contacts, setContacts] = useState([
        {
            id: 1,
            title: "First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 2,
            title: "2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 3,
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 4,
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 5,
            title: "My Fifth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
    ])
    const [search, setSearch] = useState('');
    const [postsSearchResults, setPostsSearchResults] = useState([]);
    const [contactSearchResults, setContactsSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
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

    const handleSubmit = (e, type) => {
        e.preventDefault();
        if (type === 'post') {
            e.preventDefault();
            const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
            const datetime = format(new Date(), 'MMMM dd, yyyy pp');
            const newPost = {id, title: postTitle, datetime, body: postBody};
            const allPosts = [...posts, newPost];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            history.push('/posts');
        } else if (type === 'contact') {
            e.preventDefault();
            const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
            const datetime = format(new Date(), 'MMMM dd, yyyy pp');
            const newContact = {id, title: postTitle, datetime, body: postBody};
            const allContacts = [...contacts, newContact];
            setContacts(allContacts);
            // setPostTitle('');
            // setPostBody('');
            history.push('/contacts');
        }
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
                        handleSubmit={handleSubmit}
                        postTitle={postTitle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
                    />
                </Route>
                <Route exact path="/addContact">
                    <NewPost
                        handleSubmit={handleSubmit}
                        postTitle={postTitle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
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
            {/*<Footer />*/}
        </div>
    );
}

export default App;
