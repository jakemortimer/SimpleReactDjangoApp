import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/user/${id}/`)
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching user data:', error));
    }, [id]);

    if (!data) {
        return <h1>User not found.</h1>
    }
    return (
        <div>
            <a href="/">Go home</a>
            <h1>{data.username}'s Profile</h1>
            <h2>{data.full_name}</h2>
            <h2>{data.email}</h2>
            <p>{data.description}</p>
            <img alt="profile" src={data.picture} />
        </div>
    );
}

export default Profile;
