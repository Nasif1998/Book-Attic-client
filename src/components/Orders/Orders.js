import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://banana-custard-22139.herokuapp.com/orderDetails?email=' +loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
            <h2>Order Details:</h2>
            {
                order.map(orderDetails => <OrderDetails orderDetails={orderDetails}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;