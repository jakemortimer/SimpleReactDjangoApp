import { useState } from "react";
import axios from "axios";
import Results from "./Results";


const Search = () => {
    const [searchEntry, setSearchEntry] = useState('')
    const [results, setResults] = useState([])
    const submitSearchEntry = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8000/get_user/${searchEntry}/`)
        .then(response => {
            console.log(response.data.data)
            setResults(response.data.data)
        }
        )
        .catch(error => console.error('Error fetching user data:', error));
    }
    const handleSearchEntry = (event) => {
        setSearchEntry(event.target.value)
    }
    return (
        <>
            <form onSubmit={submitSearchEntry}>
                <label>Search for a user by username...</label>
                <input value={searchEntry} onChange={handleSearchEntry}/>
            </form>
            <Results results={results} />
        </>
    )
}

export default Search;