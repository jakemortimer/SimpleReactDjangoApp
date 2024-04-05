import Search from "./Search";

const Home = () => {
    return (
        <div>
            <h1>Hello there!</h1>
            <Search />
            <p>Or create a profile...</p>
            <a href="/create_profile/">Create user</a>
        </div>
    )
}
export default Home;