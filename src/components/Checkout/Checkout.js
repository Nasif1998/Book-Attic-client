import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';


const Checkout = () => {
    let { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`http://localhost:6066/checkout/${_id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [_id])

    const newId = _id;
    console.log(newId);

    const { bookName, authorName, price } = book;
    // console.log(bookName);
    const handleCheckOut = () => {
        const newOrder = {...loggedInUser, ...selectedDate, bookName, authorName};
        fetch(`http://localhost:6066/checkout/addOrdering`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>1</td>
                    <td>{price}</td>
                </tr>
            </table>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button style={{textAlign: 'center', marginLeft: '50%'}} onClick={handleCheckOut} variant="contained" color="primary">
                    CheckOut
                </Button> 
            </MuiPickersUtilsProvider>

        </div>
    );
};

export default Checkout;