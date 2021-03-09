import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const show = id => {
        const url = `posts/${id}`
        history.push(url)
    }

    return (
        <div>

            <p>Id : {id}</p>
            <p> Title : {title}</p>
            <p> Body : {body}</p>
            <button onClick={() => show(id)}> Show Details{id} </button>
            <button as={Link} to={`/post/${id}`} onClick={() => history.push(`/posts/${id}`)} >Post Details {id} link as</button>
        </div >
    );
};

export default Post;