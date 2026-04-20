import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addBookToWishListInLocalDB, addReadListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(()=> getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(getAllWishListFromLocalDB());

    // useEffect(()=>{
    //     const readListFromLocalDB =  getAllReadListFromLocalDB();
    //     console.log(readListFromLocalDB, 'getReadListFromLocalDB');
    //     setReadList(readListFromLocalDB);
    // },[]) --> Doesn't work properly when refreshes the page.


    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or book boject
        // step 2: where to store
        // step 3: array or collection
        // step 4: If the book already exists then show an alert or toast
        // step 5: If not then add the book in the array or collection
        addReadListToLocalDB(currentBook);

        const isExistBook = readList.find(book => book.bookId == currentBook.bookId);
        if (isExistBook) {
            toast.error("The book already exist in read list.")
        } else {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to the Read List`)
        }
        // console.log(currentBook, "Current Book")
        // console.log(readList, "readList")

    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = readList.find(book => book.bookId == currentBook.bookId);
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
            addBookToWishListInLocalDB(currentBook)
            toast.success( `${currentBook.bookName} is added to Wish List`)
        }
    }

    const data = {
        readList, setReadList, handleMarkAsRead,
        wishList, setWishList, handleWishList
    }

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;