import React from 'react';
import { Avatar, Grid, Typography, Paper } from '@mui/material';

const UserProfile = () => {

    const user = {
        name: 'Kathija Ranasinghe',
        school: 'Maris Stella college, Negomobo',
        dob: 'May 09, 2007',
        email: 'kathijaranasinghe@example.com',
        description: 'I am a programming enthusiast!',
        hobby: 'Watching anime series',
        hometown: 'Naiwala',
        age: '16',
        phone: '0999087649',
        ambition: 'To become a cyber security engineer',
        gender: 'male',
        favoriteColor: 'light blue',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(to right, #FF00CC , #333399)' }}>
            <Paper style={{ padding: 150, textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', background: 'linear-gradient(to right, #ffc107 , #ff8c00)', margin: '20px' }}>
                <Avatar
                    alt="My Image"
                    src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=826&t=st=1706546741~exp=1706547341~hmac=75d2886dec500c84af6ae7a7e593e2babd6e355373812db9c25180dfbd1af528"
                    sx={{ width: 120, height: 120 }}
                />
                <Typography variant="subtitle1">
                    {user.name}
                </Typography>
            </Paper>
            <Paper style={{ width: '70vh', padding: 50, background: 'linear-gradient(to right, #ffc107 , #ff8c00)', borderRadius: 8, margin: '20px' }}>
                <Typography variant="subtitle1">
                    <strong>School:</strong> {user.school}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Date of Birth:</strong> {user.dob}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Email:</strong> {user.email}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Description:</strong> {user.description}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Hobby:</strong> {user.hobby}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Hometown:</strong> {user.hometown}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Age:</strong> {user.age}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Phone:</strong> {user.phone}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Ambition:</strong> {user.ambition}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Gender:</strong> {user.gender}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Favorite Color:</strong> {user.favoriteColor}
                </Typography>
            </Paper>
        </div>
    );
}

export default UserProfile;
