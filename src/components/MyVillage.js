import { Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyVillage = () => {
    const villageInfo = {
        name: "Naiwala",
        title: "My Hometown",
        description: "Naiwala is a very small city that situated in Veyangoda in Gamapa district in Western Province.Naiwala is located in the region of Western. Western's capital Colombo (Colombo) is approximately 31 km / 19 mi away from Naiwala (as the crow flies). The distance from Naiwala to Sri Lanka's capital Colombo (Colombo) is approximately 31 km / 19 mi (as the crow flies).",
        gallery: [
            { id: 1, imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d2/49/b2/the-covanro.jpg?w=1200&h=-1&s=1', caption: 'Hotels of Naiwala' },
            { id: 2, imageUrl: 'https://mapio.net/images-p/44020685.jpg', caption: 'Welcome to Naiwala' },
            { id: 3, imageUrl: 'https://mapio.net/images-p/80200892.jpg', caption: 'A temple of Naiwala' },
        ]
    }

    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #FF00CC , #333399)', // Change the gradient colors
                minHeight: '100vh', // Set a minimum height to cover the whole viewport
                padding: '20px',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ padding: 20 , background: 'linear-gradient(to right, #ffc107 , #ff8c00)' }}>
                        <Typography variant="h5" gutterBottom>
                            {villageInfo.title} is {villageInfo.name}
                        </Typography>
                        <Divider style={{ margin: '10px 0' }} />
                        <Typography variant="body1">
                            {villageInfo.description}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: 20 , background: 'linear-gradient(to right, #ffc107 , #ff8c00)' }}>
                        <Typography variant="h5" gutterBottom>
                            Here is my location!
                        </Typography>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.36077373417!2d80.03001173866639!3d7.158156848211605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e335605e2b99%3A0x5e821222bdb8e5a6!2sNaiwala%20Junction%2C%20Veyangoda!5e0!3m2!1sen!2slk!4v1706544573119!5m2!1sen!2slk"
                            width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom style={{ padding: '20px' }}>
                        Image Gallery
                    </Typography>
                    <Grid container spacing={2}>
                        {villageInfo.gallery.map((image) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <Card style={{background: 'linear-gradient(to right, #ffc107 , #ff8c00)'}}>
                                    <CardMedia component="img" height="200" image={image.imageUrl} alt={image.caption} />
                                    <CardContent>
                                        <Typography variant="caption" color="textSecondary">
                                            {image.caption}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default MyVillage;
