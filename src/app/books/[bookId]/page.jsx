import React from 'react';

// export const generateStaticParams = async () => {
//     const res = await fetch('http://localhost:5000/books');
//     const books = await res.json();

//     // X [1, 2, 3, 4, 4] 
//     // [{bookId: 1}, {bookId: 2}, ...]
//     return books.slice(1, 3).map(book => ({ bookId: book.id }));
// }

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const { title, author, price } = await res.json();

    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default BookDetailsPage;