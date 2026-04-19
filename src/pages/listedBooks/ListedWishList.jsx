import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../components/ui/BookCard';

const ListedWishList = () => {
    const { wishList } = useContext(BookContext);

    if (wishList.length == 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Wish List data found</h2>
        </div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                wishList.map((book, ind) => <BookCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedWishList;