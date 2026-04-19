import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or book boject
        // step 2: where to store
        // step 3: array or collection
        // step 4: If the book already exists then show an alert or toast
        // step 5: If not then add the book in the array or collection

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId);
        if (isExistBook) {
            toast.error("The book already exist in read list.")
        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to the Read List`)
        }
        // console.log(currentBook, "Current Book")
        // console.log(storedBooks, "StoredBooks")

    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = storedBooks.find(book => book.bookId == currentBook.bookId);
        if(isExistInReadList) {
            toast.error('This book is already in Read List')
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);
        if (isExistBook) {
            toast.error("The book already exist in wishlist.")
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success( `${currentBook.bookName} is added to Wish List`)
        }
    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead,
        wishList, setWishList, handleWishList
    }

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;