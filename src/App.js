// src/App.js

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Post from './components/Post';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';

function App() {
    const [user, setUser] = useState({
        name: 'Dastan Baibolatov', // default name
        bio: '"Indeed, the patient will be given their reward without account."', // default bio
        birthdate: "10.09.2001",
        location: "Kazakhstan, Almaty"
    });

    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/profile" element={<Profile user={user} onUpdate={handleUserUpdate} />} />
                    {/* You can add more routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
