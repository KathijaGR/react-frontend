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
                            src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=826&t=st=1706546741~exp=1706547341~hmac=75d2886dec500c84af6ae7a7e593e2babd6e355373812db9c25180dfbd1af528"
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
                            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1706547118~exp=1706547718~hmac=02563691501d98ace32375e26ac706a7c0edb70d597ed4a4426521a75bcc1da7"
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
                            src="https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?w=826&t=st=1706547157~exp=1706547757~hmac=54618d2323dc84e28a8017423d39899f2f1e421d61d93d4fcde07bd6b3cce546"
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
                            src="https://img.freepik.com/free-photo/3d-illustration-young-man-with-beard-mustache_1142-51070.jpg?t=st=1706547208~exp=1706550808~hmac=d378d4344bc471092ccb1f5b8ecc86d5d7b7f1212ea6dca50c32b41767302968&w=826"
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