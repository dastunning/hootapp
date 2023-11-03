// src/components/Post.js

import React, { useState } from 'react';
import './styles/Post.css';

const Post = ({ post, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(post.content);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(post.id, editedContent);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(post.id);
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div className="post">
            {isEditing ? (
                <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                />
            ) : (
                <p>{post.content}</p>
            )}
            <div className="post-actions">
                <button onClick={() => post.onLike(post.id)}>Like</button>
                <button onClick={() => post.onDislike(post.id)}>Dislike</button>
                <button onClick={handleLike}>Like {likes}</button>
                <button onClick={handleDislike}>Dislike {dislikes}</button>
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Post;
