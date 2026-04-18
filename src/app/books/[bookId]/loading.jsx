import React from 'react';

const BookLoading = () => {
    return (
        <div className="flex justify-center items-center">
            <h2>Loading book details...</h2>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default BookLoading;