import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import BookDetails from '../pages/bookDetails/BookDetails';
import PageToRead from '../pages/pageToRead/PageToRead';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/bookDetails/:bookId',
        loader: ()=> fetch('/booksData.json'),
        Component: BookDetails,
      },
      {
        path: '/page-to-read',
        Component: PageToRead,
      }
      
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
])

