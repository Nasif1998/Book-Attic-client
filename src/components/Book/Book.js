
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Book = (props) => {
    const { bookName, authorName, price, imageURL, _id } = props.book;
    
    // console.log(_id);

    const bookStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)'
    }
    return (
        <div>
            
            <div style={bookStyle}>
                <img style={{ height: '200px', width: '200px' }} src={imageURL} key={_id} alt="" />
                <h4>{bookName}</h4>
                <p>{authorName}</p>
                <br />
                <h4 style={{ color: 'blue' }}>{price}$</h4>
                {/* <p> <Link to={`/destination/${id}`}>
                    <button style={{ backgroundColor: 'orange' }}>Select</button>
                </Link></p> */}
                <p> <Link to={`/checkout/${_id}`}>
                    <button style={{ backgroundColor: 'blue', marginLeft: '5%' }}>Buy Now</button>
                </Link> </p>

            </div>
        </div>
    );
};

export default Book;