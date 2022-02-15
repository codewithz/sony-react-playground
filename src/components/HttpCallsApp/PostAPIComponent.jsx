import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PostAPIComponent() {

    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
    // const apiEndPoint = 'http://codewithz.work:3900/api/genres';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //pending > resolved (success) OR rejected (failure)
        getPosts();
    }, [])

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

        console.log(result.data, '--', result.status)
        const newPost = result.data;
        const postsClone = [newPost, ...posts];
        setPosts(postsClone);
    }

    const handleUpdate = async (post) => {
        post.title = "Updated Post Title"

        const promise = axios.put(apiEndPoint + "/" + post.id, post);
        const result = await promise;
        console.log(result);

        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post }
        setPosts(postsClone);
    }

    const handleDelete = async (post) => {

        try {
            const promise = axios.delete("z" + apiEndPoint + "/" + post.id);
            const result = await promise;
            const updatedPosts = posts.filter(p => p.id !== post.id);
            setPosts(updatedPosts);
        }
        catch (error) {
            //Expected  (404: not found, 400: bad message) - CLIENT ERRORS
            // --> Display a specific error message
            //
            console.log(error)
            if (error.response && error.response.status === 404) {
                alert('This post is already deleted!!');
            }
            //Unexpected (Network Down, Server Down, DB Down, Bug)
            //--> Log it
            //--> Display a generic message
            else {
                console.log("Logging the error", error);
                alert('Something failed while deleting the post');
            }
        }




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
                                    <button
                                        onClick={() => handleUpdate(post)}
                                        className="btn btn-info btn-sm">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(post)}
                                        className="btn btn-danger btn-sm">
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
