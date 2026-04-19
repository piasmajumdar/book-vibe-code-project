import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../listedBooks/ListedReadList';
import ListedWishList from '../listedBooks/ListedWishList';

const Books = () => {
    const { readList, wishList } = useContext(BookContext);
    console.log(readList, wishList, "Book Context")
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;