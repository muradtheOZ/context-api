import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style ={{border: '1px solid tomato'}}>
            <h1>This is Home component value: {category}</h1>
            <Category/>
        </div>
    );
};

export default Home;