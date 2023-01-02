import {Link, useLocation} from 'react-router-dom';

const Nav = ({search, setSearch}) => {
    const location = useLocation();
    if (location.pathname === '/posts') {
        return (
            <nav className="Nav">
                <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">Search Posts</label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Posts"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Blog</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </nav>
        )
    } else if (location.pathname === '/contacts') {
        return (
            <nav className="Nav">
                <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">Search Posts</label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Contacts"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Blog</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav className="Nav">
                <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">Search Posts</label>
                    <input
                        style={{display: 'none'}}
                        disabled={true}
                        id="search"
                        type="text"
                        placeholder="Search Contacts"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Blog</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
