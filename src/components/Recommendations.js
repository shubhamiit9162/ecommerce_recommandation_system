import React, { useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [product, setProduct] = useState('');
    const [number, setNumber] = useState(5);
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/recommendations', { prod: product, nbr: number });
            setRecommendations(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product Name" required />
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} min="1" max="10" required />
                <button type="submit">Get Recommendations</button>
            </form>
            <div className="recommendations">
                {recommendations.map(rec => (
                    <div key={rec.Name}>
                        <h3>{rec.Name}</h3>
                        <p>{rec.Brand}</p>
                        <p>Price: ${rec.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
