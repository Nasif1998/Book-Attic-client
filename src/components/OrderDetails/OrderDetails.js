import React from 'react';

const OrderDetails = (props) => {
    const { bookName, authorName, orderTime, _id, price } = props.orderDetails;
    return (
        <div style={{textAlign: 'center', marginBottom: '20px'}}>

            <details>
                <summary>Order of {bookName}</summary>
                <p>Order ID: {_id}</p>
                <p>Author Name: {authorName}</p>
                <p>{price}</p>
                <p>Time: {orderTime}</p>
            </details>
        </div>
    );
};

export default OrderDetails;