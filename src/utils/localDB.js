// Read List
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    // console.log(allReadList, 'ReadList from local DB')
    if(allReadList) return JSON.parse(allReadList);
    
    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    
    const doesExist = allBooks.find(bk=> bk.bookId === book.bookId);
    
    if(!doesExist){
        allBooks.push(book)
        localStorage.setItem('readList',JSON.stringify(allBooks))
    }
}

// Wish List 
const getAllWishListFromLocalDB = ()=>{
    const wishList = localStorage.getItem('wishList');
    if(wishList) return JSON.parse(wishList);

    return [];
}

const addBookToWishListInLocalDB = (currentBook)=>{
    const wishList = getAllWishListFromLocalDB();
    const doesExist = wishList.find(book=> book.bookId === currentBook.bookId);
    if(!doesExist){
        wishList.push(currentBook);
        localStorage.setItem('wishList', JSON.stringify(wishList));
    }
}

export {getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addBookToWishListInLocalDB}