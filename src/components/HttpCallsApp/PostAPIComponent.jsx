import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PostAPIComponent() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //pending > resolved (success) OR rejected (failure)
        const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(promise);

    })

    return (
        <div>
            <button className="btn btn-primary" style={{ marginBottom: 20 }}>
                Add
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button className="btn btn-info btn-sm">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
