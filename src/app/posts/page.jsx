import React from 'react';


// const getPosts = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }

// good practice to data fetch:
const getPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
}
//  better way to data fetch:
// const getPosts = async() => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     }
//     catch (error) {
//         throw new Error("Failed to fetch posts");
//     }
// }

const PostsPage = async () => {
    
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();
    

    const posts = await getPosts();

    return (
        <div>
            <h2>Posts are coming soon: { posts.length}</h2>
        </div>
    );
};

export default PostsPage;