import React, { useContext } from 'react';
import {CategoryContext} from '../../App'

const CategoryDetails = (props) => {
    const category = useContext(CategoryContext)
    const {count} = props;
    return (
        <div>
            <h4>This is category details</h4>
            <h5>Selected Category:{category}</h5>
        </div>
    );
};

export default CategoryDetails;<h3>This is category details</h3>