import React from 'react'
import {useContext, useEffect, useState } from 'react';
import { LoginContext, UserContext} from './_app';
import MaterialHeader from '../components/MaterialHeader';
import Select from 'react-select';
import bookService from '../services/bookRequests'
import { bookType } from '@/types/types';
type Props = {}

function Books() {
    const [books, setBooks] = useState<bookType[]>([])
    const user = useContext(UserContext);
    const loggedIn = useContext(LoginContext);

    // 1. Make a request, to retrieve all the books once using useEffect
    useEffect(() => {
        const getBooks = async () => {
            const res = await bookService.getAll();
            const bookList = await res.data;
            console.log('BookList',bookList);
            setBooks(bookList);
        };
        getBooks();
    }, [])
    console.log('Books', books[0]);


    // 2. Create a new array to use as options in our select drop down.

    const bookOptions = books.map((book) => {
        return ({label: book.name, 
            value: book})
    })
    console.log(bookOptions);

    // 3. Use bookOptions as the options for select.

    // 4. Display the users current books
    // Before we do this - we need a failsafe/ check to ensure that the user is logged in
    const userBooks = (user == undefined ? null : user.user.books);


  return (
        <>
        <MaterialHeader/>

        {/* The idea here, is that we only see books that come up from the filtered search bar, and select them --- the long term plan anyway
        That way, a new book can only be added if it already exists in the database. It will prevent us from having to check for manual inserts that don't match up
        and different IDs for the same book. */}
        <Select 
        instanceId="anyID"
        options={bookOptions}/>
        </>
  )
}

export default Books