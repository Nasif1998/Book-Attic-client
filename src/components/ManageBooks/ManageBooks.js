import React, { useEffect, useState } from 'react';
import AllBooks from '../AllBooks/AllBooks';

const ManageBooks = () => {
    const [bookLists, setBookLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6066/books')
        .then(res => res.json())
        .then(data => setBookLists(data))
    }, [])
    return (
        <div>
            {
                bookLists.map(allBooks => <AllBooks allBooks={allBooks}></AllBooks>)
            }

{/* <table id="customers">
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    {/* <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>{price}</td>
                    <td>1</td> */}

                    {/* {
                        bookLists.map(allBooks => <AllBooks allBooks={allBooks}></AllBooks>)
                    }
                </tr>
            </table> */} 
        </div>
    );
};

export default ManageBooks;