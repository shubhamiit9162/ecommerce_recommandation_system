import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signin', credentials);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default Signin;
