import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PostAPIComponent() {

    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //pending > resolved (success) OR rejected (failure)
        getPosts();
    })

    const getPosts = async () => {
        const promise = axios.get(apiEndPoint);
        const result = await promise;
        const { data } = result;
        setPosts(data);

    }

    const handleAdd = async () => {

        const obj = { title: 'A', body: 'B' }
        const promise = axios.post(apiEndPoint, obj);
        const result = await promise;
        console.log(result)
    }


    return (
        <div>
            <button
                onClick={handleAdd}
                className="btn btn-primary" style={{ marginBottom: 20 }}>
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
