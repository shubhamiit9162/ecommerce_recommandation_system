import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import Header from './components/Header';
import ProductList from './components/ProductList';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Recommendations from './components/Recommendations';
import './App.css';

const App = () => {
    const products = []; // Fetch products from your backend

    return (
        <Router>
            <Header />
            <Routes>  {/* Replace Switch with Routes */}
                <Route path="/" element={<ProductList products={products} />} />  {/* Use element prop instead of component */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
        </Router>
    );
};

export default App;
