import React from 'react';
import { useHistory } from 'react-router';

const AllBooks = (props) => {
    const { bookName, authorName, price, _id } = props.allBooks;
    const history = useHistory();

    const deleteEvent = (id, event) => {
        const url = `https://banana-custard-22139.herokuapp.com/deleteEvent/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    //  event.target.parentNode.style.display = 'none';
                    //  window.location.reload(false);
                    history.go(0);
                }

            })
    }
    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>{price}</td>
                    <td><button onClick={() => deleteEvent(_id)}>Delete</button></td>
                </tr>
                {/* <h6>{bookName}</h6>
                <h6>{authorName}</h6>
                
                <br/> */}
            </table>
        </div>
    );
};

export default AllBooks;