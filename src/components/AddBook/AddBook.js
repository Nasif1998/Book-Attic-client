import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            bookName : data.bookName,
            authorName : data.authorName,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:6066/addBook`;
        
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'aab7862e73868b2ce0b96b1c96ee6492');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const formStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)',
        textAlign: 'center'
    }
    return (
        <div style={formStyle}>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="bookName" defaultValue="Book Name" ref={register} />
                <br/>
                <input name="authorName" defaultValue="Author Name" ref={register} />
                <br/>
                <input name="price" defaultValue="Price" ref={register} />
                <br/>

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                

                <input type="submit" />
            </form>
            <p> <Link to={`/manageBooks`}>
                    <button style={{ backgroundColor: 'blue', marginLeft: '2%', marginTop: '50px' }}>Manage Books</button>
                </Link> </p>
        </div>
    );
};

export default AddBook;