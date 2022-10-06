import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetails from '../MealDetails/MealDetails';

const Details = () => {
    const detail = useLoaderData();
    const all = detail.meals;
    console.log(all);
    return (
        <div className='grid grid-cols-1 m-10 justify-center items-center' >
            {
                all.map(items => <MealDetails items={items} ></MealDetails>)
            }
        </div>
    );
};

export default Details;