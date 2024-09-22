import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.Name} className="product">
                    <img src={product.ImageURL} alt={product.Name} />
                    <h2>{product.Name}</h2>
                    <p>{product.Brand}</p>
                    <p>Price: ${product.Price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
