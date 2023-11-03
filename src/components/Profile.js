// src/components/Profile.js
import React, { useState } from 'react';
import './styles/Profile.css';
import avatar from './styles/images/avatar.JPG';

const Profile = ({ user, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [bio, setBio] = useState(user.bio);
    const [birthdate, setbirthdate] = useState(user.birthdate);
    const [location, setlocation] = useState(user.location);

    const handleEdit = () => setIsEditing(true);
    const handleSave = () => {
        onUpdate({ ...user, name, bio, birthdate, location });
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-avatar">
                {/* Placeholder for avatar, replace with actual image path */}
                <img src={avatar} alt="Profile Avatar" className="profile-avatar"/>
            </div>
            <div className="profile-info">
                {isEditing ? (
                    <div className="edit-profile-info">
                        <textarea
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        <textarea
                            type="text"
                            value={birthdate}
                            onChange={(e) => setbirthdate(e.target.value)}
                        />
                        <textarea
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                        />

                        <button className="profile-action" onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <>
                        <h1 className="profile-name">{user.name}</h1>
                        <p className="profile-quote">{user.bio}</p>
                        <p className="profile-dob">{user.birthdate}</p>
                        <p className="profile-location">{user.location}</p>
                        <button className="profile-action" onClick={handleEdit}>Edit Profile</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
