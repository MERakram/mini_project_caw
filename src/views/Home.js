import logo from '../assets/Blog.png';

const Home = () => {
    return (
        <main className='Home'>
            <p style={{marginTop: "1rem"}}>We are Akram and Malak, Welcome to our Home Page.</p>
            <img style={{
                width: "50%",
                justifyContent: "center",
                justifyItems: "center",
            }} src={logo} alt="Logo"/>
        </main>
    )
};

export default Home