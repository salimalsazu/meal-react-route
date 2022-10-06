import React from 'react';
import { Outlet, Router, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const catagories = useLoaderData();
    const navs = catagories.categories;
    // console.log(navs);
    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-5xl font-extrabold text-orange-900 text-center'>Putin.Resturent</h1>
            </div>
            <hr />
            <div className='flex flex-col lg:flex-row gap-2 justify-center items-center mx-10 my-4' >
                {
                    navs.map(nav => <Header nav={nav} key={nav.idCategory} ></Header>)
                }
            </div>
            <hr />
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;