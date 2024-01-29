import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Grid, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const AnimatedCard = styled(Card)`
  transition : transform 0.3s ease-in-out;
  &:hover{
    transform : scale(1.05);
    background: linear-gradient(to right, #ffc107 , #ff8c00)
  }
  cursor : pointer;
  background: linear-gradient(to right, #ff8c00, #ffc107);
`;

function AboutMe(){
    const [expanded, setExpanded] = useState(false);
    
    const handleCardClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div
      style={{
        background: 'linear-gradient(to bottom, #FF00CC , #333399)',
        minHeight: '100vh', // Set a minimum height to cover the whole viewport
        padding: '150px',
      }}
    >
        <Grid container spacing={3} justifyContent="center" alignItems="center" alignContent="center" >
            <Grid item>
            <Paper elevation={3} style={{backgroundColor : '#3498DB', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    About Myself
                </Typography>
            </Paper>
                <Slide direction="right" in={true} timeout={5} style={{margin : '15px'}}>
                    <AnimatedCard onClick={handleCardClick} 
                    style={{transform: expanded ? 'scale(1.25)' : 'scale(1)' }}>
                        <CardContent>
                        <Avatar
                             alt="My Avatar"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{ width: 80, height: 80, marginBottom: 2, position: 'absolute' }}/>
                            <Typography  variant='h3'> Kathija Ranasinghe </Typography>
                            <Typography variant="h6" gutterBottom>
                                Hello My Friends! Welcome to my Web App!
                            </Typography>
                            <Typography>
                                I am an enthusiastic Programmer. I hereby welcome you to my React Web Application. 
                            </Typography>
                            <Typography>
                            Hello! I'm Kathija Ranasinghe, a passionate Web Developer from Naiwala. With a year of
                         experience in web development, I've been on an exciting journey since my time at my course.
                          From mastering HTML, CSS, and JavaScript to working on various web projects, I thrive on creating user-friendly and visually appealing websites.
                         Outside of coding, you'll find me exploring the latest design trends, experimenting with new frameworks, or enjoying a cup of coffee at a local cafe in Naiwala.
                          I believe in making the web not only functional but also a delight to navigate.
                         As I continue to evolve in this dynamic field, my goal is to contribute to innovative projects that leave a positive impact.
                          Feel free to explore my portfolio to see examples of my work. Let's connect and bring your digital ideas to life!
                            </Typography>
                        </CardContent>
                    </AnimatedCard>
                </Slide>
            </Grid>

            <Grid item>

            <Paper elevation={3} style={{backgroundColor : '#3498DB', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    A List of my Friends
                </Typography>
            </Paper>
            <Card style={{ background: 'linear-gradient(rgb(7, 230, 255), rgb(0, 154, 255))' }}>
            <CardContent>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars1.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Sandun Nawarathna </Typography>
                        <Typography> Expertise : HTML, C#, Processing, React </Typography>
                        <Typography> Hi my name is Sandun Nawarathna. I am a Software Developer. </Typography>

                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars3.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Sahan Sulakshana Silva </Typography>
                        <Typography > Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Sahan Sulakshana Silva. I am a Software Developer. </Typography>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Rusira Samarasekara </Typography>
                        <Typography > Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Rusira Samarasekara. I am a Software Developer. </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>

        </Grid>
    </div>
    );

}

export default AboutMe;