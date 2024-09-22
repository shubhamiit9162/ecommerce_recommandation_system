import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
