import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../components/ui/BookCard';

const ListedWishList = ({sortingType}) => {
    const { wishList } = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState(wishList);


    useEffect(() => {
        if (sortingType) {
            if (sortingType == 'pages') {
                const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                // console.log(sortedData)
                setFilteredWishList(sortedData);
            } else if (sortingType == 'rating') {
                const sortedData = [...wishList].sort((a, b) => b.rating - a.rating)
                setFilteredWishList(sortedData);
            }
        }
    }, [sortingType, wishList])

    if (filteredWishList.length == 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Wish List data found</h2>
        </div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                filteredWishList.map((book, ind) => <BookCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedWishList;