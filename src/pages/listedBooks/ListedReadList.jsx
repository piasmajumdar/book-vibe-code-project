import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../../components/ui/BookCard';
import { BookContext } from '../../context/BookContext';

const ListedReadList = ({ sortingType }) => {
    const { readList } = useContext(BookContext);
    const [filteredList, setFilteredList] = useState(readList);


    useEffect(() => {
        if(sortingType){
            if(sortingType == 'pages'){
                const sortedData = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
                // console.log(sortedData)
                setFilteredList(sortedData);
            }else if(sortingType == 'rating'){
                const sortedData = [...readList].sort((a,b)=> b.rating - a.rating)
                setFilteredList(sortedData);
            }
        }
    }, [sortingType, readList])


    if (filteredList.length == 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Read List data found</h2>
        </div>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                filteredList.map((book, ind) => <BookCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedReadList;