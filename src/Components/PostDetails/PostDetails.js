import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment/Comment';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    return (
        <div>
            <h1>PostDetails</h1>
            <p> <strong>Post Id :</strong> {post.id}</p>
            <p> <strong>Post Title :</strong> {post.title}</p>
            <p><strong>Post Body :</strong> {post.body}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;