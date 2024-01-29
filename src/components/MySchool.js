import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

const schoolImages = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg",
    "https://images6.fanpop.com/image/photos/36800000/School-image-school-36812026-3888-2592.jpg",
    "https://cdnassets.hw.net/b6/7d/95e393ff4c8296702e5e63979e3e/40b17d69b0b2434486fc7f485d3f44fc.jpg"
];

function MySchool(){
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderCharge = (Event, newValue) => {
          setSliderValue(newValue);
    }

    return ( 
        <div
        style={{
            background: 'linear-gradient(to bottom, #FF00CC , #333399)',
            minHeight: '100vh', // Set a minimum height to cover the whole viewport
            padding: '140px',}}
        > 
    <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h4" gutterBottom></Typography>
        <Slider value={sliderValue} onChange={handleSliderCharge} min={0} max={schoolImages.length-1} step={1}
        marks valueLabelDisplay='auto' valueLabelFormat={(value)=> value+1} />
        <Card style={{ background: `linear-gradient(to right, #ffc107, #ff8c00)`, color: '#fff' }}>
            <CardMedia component="img" alt={"school"} height="400" image={schoolImages[sliderValue]} />
            <CardContent>
                <Typography>School Details</Typography>
                <p>Maris Stella College, located in Negombo, Sri Lanka, is a distinguished educational institution known for its rich history and commitment to academic excellence. Established in 1922 by the Marist Brothers, the college has played a pivotal role in shaping the educational landscape of Negombo.</p>

<p>With a mission to provide quality education rooted in moral values, Maris Stella College has consistently produced well-rounded individuals who excel not only in academics but also in various extracurricular activities. The college's emphasis on character development, discipline, and community service has contributed to its esteemed reputation.</p>

<p>Situated in the vibrant coastal town of Negombo, Maris Stella College offers a conducive environment for learning and personal growth. The college's dedication to nurturing holistic development has produced graduates who make positive contributions to society, embodying the Marist values of love, family spirit, simplicity, and presence.</p>

<p>Maris Stella College stands as a testament to its enduring commitment to shaping the minds and character of the youth, preparing them to face the challenges of the future with resilience and integrity.





</p>
            </CardContent>
        </Card>
    </Grid>
    </Grid>
    </div>
    );
}

export default MySchool;