import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    // console.log(bookParamsId, 'bookId')

    const books = useLoaderData();
    // console.log(books)

    const expectedBook = books.find(book => book.bookId === Number(bookParamsId))
    // console.log(expectedBook, "expected book")
    const {
        bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = expectedBook;

    return (
        <div className="grid grid-cols-2 lg:card-side bg-base-100 shadow-sm w-11/12 mx-auto py-12 my-10">
            <figure className='flex justify-center items-center'>
                <img
                    className='h-100 w-auto'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-2 border-y'>{category}</p>
                {/* <p><span className='font-bold'>Review: </span>{review}</p> */}
                <div className='flex flex-wrap gap-2 items-center'>
                    <span className='font-bold'>Tag </span>{
                        tags.map((tag, ind) =>
                            <div key={ind} className="badge text-green-500 bg-green-100 font-semibold">#{tag}</div>)
                    }
                </div>
                <div className="border-t">
                    <div className=' space-y-3 w-60'>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Number of Pages:  </span> <span className='font-bold'>{totalPages}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Publisher:  </span> <span className='font-bold'>{publisher}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Year of Publishing:  </span> <span className='font-bold'>{yearOfPublishing}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Rating:  </span> <span className='font-bold'>{rating}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='btn'>Read</button>
                            <button className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;