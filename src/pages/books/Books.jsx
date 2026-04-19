import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const {storedBooks, wishList} = useContext(BookContext);
    console.log(storedBooks,wishList, "Book Context")
    return (
        <div className='w-11/12 mx-auto'>
            read list: {storedBooks.length} <br />
            wish list: {wishList.length}
            
        </div>
    );
};

export default Books;