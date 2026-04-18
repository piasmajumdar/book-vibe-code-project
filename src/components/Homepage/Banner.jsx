import React from 'react';
import BookImageHero from '../../assets/book-hero.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                <img
                    src={BookImageHero}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success mt-4">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;