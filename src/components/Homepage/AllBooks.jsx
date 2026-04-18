import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log("Books", books);

    return (
        <div className='my-12 w-11/12 mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book) => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;