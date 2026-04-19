import React, { useContext } from 'react';
import BookCard from '../../components/ui/BookCard';
import { BookContext } from '../../context/BookContext';

const ListedReadList = () => {
    const { readList } = useContext(BookContext);

    if (readList.length == 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Read List data found</h2>
        </div>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                readList.map((book, ind) => <BookCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedReadList;