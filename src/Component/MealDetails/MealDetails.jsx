import React from 'react';

const MealDetails = ({ items }) => {
    const { strMeal, strInstructions, strCategory, strArea, strMealThumb } = items;
    return (
        <div className='flex flex-col '>
            <div className='mb-5 rounded-lg flex justify-center items-center'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='mb-5'>
                <h1 className='text-3xl font-extrabold mb-5 mt-5 underline'>{strMeal}</h1>
                <p className='text-gray-600 text-justify'>{strInstructions}</p>
            </div>
            <div className='text-left'>
                <h2><span className='font-bold'> Category:</span>  {strCategory}</h2>
                <h2> <span className='font-bold'>Area: </span>{strArea}</h2>
            </div>
        </div>
    );
};

export default MealDetails;