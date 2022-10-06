import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Meals = () => {
    const meals = useLoaderData();
    const allmeal = meals.meals;
    console.log(meals);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 md:m-10 lg:m-20'>
            {
                allmeal.map(meal => <Cards meal={meal} ></Cards>)
            }
        </div>
    );
};

export default Meals;