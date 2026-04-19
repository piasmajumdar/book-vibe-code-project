import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList, "Book Context")
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>read list: {storedBooks.length} </h2>
                </TabPanel>
                <TabPanel>
                    <h2>wish list: {wishList.length}</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;