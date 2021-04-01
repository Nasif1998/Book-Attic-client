import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6066/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            {/* {
                books.map(book => <Book book={book}></Book>)
            } */}
            {
                books.length === 0 && <Spinner animation="border" role="status">
                    <span  className="sr-only">Loading...</span>
                </Spinner>
            }
            <Container>
                <Row>
                    {
                        books.map(book => (
                            <Col xs={12} md={4}>
                                <Book book={book}></Book>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;