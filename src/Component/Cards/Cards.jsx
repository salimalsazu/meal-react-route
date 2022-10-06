import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Cards = ({ meal }) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/details/${idMeal}`);
    }

    const { idMeal, strMeal, strMealThumb } = meal;
    return (
        <div className='bg-slate-300  rounded-lg'>
            <div className='mb-5 '>
                <img className='rounded-lg' src={strMealThumb} alt="" />
            </div>
            <div className='p-5 flex justify-between items-center'>
                <h1 className='text-xl font-bold'>{strMeal}</h1>
                <button onClick={handleNavigate} ><FontAwesomeIcon className='text-2xl' icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cards;