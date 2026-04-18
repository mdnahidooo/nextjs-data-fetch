import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const { title, author } = book;
    return (
        <div className="card bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>by {author}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${book.id}`}>
                        <button className="btn btn-primary">Show Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;