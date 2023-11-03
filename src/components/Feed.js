import React from 'react';
import './styles/Feed.css';

function Feed() {
    const [posts, setPosts] = React.useState([]);

    const [postContent, setPostContent] = React.useState('');

    const addPost = () => {
        setPosts([...posts, { id: posts.length + 1, content: postContent, likes: 0 }]);

    };

    return (
        <div className="feed-container">
            <input type="text"
                   placeholder="What's happening?"
                   onChange={(e) => setPostContent(e.target.value)}
                   value={postContent}
                   className="input-post"
            />
            <button onClick={addPost} className="btn-post">Hoot</button>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <p className="post-content">{post.content}</p>
                        <div className="post-actions">
                            <button>Like</button>
                            <button>Dislike</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;