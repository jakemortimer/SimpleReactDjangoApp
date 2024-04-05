import { useState } from "react";
import axios from "axios";

const CreateProfile = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handlePictureChange = (event) => {
    setPicture(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      try {
        const response = axios.post('http://localhost:8000/create_user/', {
            user: {
              username,
              email,
            },
            full_name: fullName,
            description,
            picture
        });
        console.log(response.data);
        setUsername('');
        setFullName('');
        setEmail('');
        setDescription('');
        setPicture('');
    } catch (error) {
        console.error('Error creating user:', error);
    }
  }

  return (
    <>
      <a href="/">Go back</a>
      <h1>Create a profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input value={username} onChange={handleUsernameChange} /><br />
        <label>Full name:</label>
        <input value={fullName} onChange={handleFullNameChange} /><br />
        <label>Email address:</label>
        <input value={email} onChange={handleEmailChange} /><br />
        <label>Description:</label>
        <input value={description} onChange={handleDescriptionChange} /><br />
        <label>Picture URL</label>
        <input value={picture} onChange={handlePictureChange} /><br />
        <button>Submit</button>
      </form>
    </>
  )
};

export default CreateProfile;