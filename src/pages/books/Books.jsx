import React, {useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../listedBooks/ListedReadList';
import ListedWishList from '../listedBooks/ListedWishList';

const Books = () => {
    const [sortingType, setSortingType] = useState('');
    // console.log(sortingType)


    return (
        <div className='w-11/12 mx-auto my-3'>
            <div className='flex justify-center my-8'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn btn-success m-1">Sort By: {sortingType}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType('pages')}><a>Pages</a></li>
                        <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;