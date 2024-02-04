import React from 'react'
import backgroundImage from './../../assets/about.jpg'
import Navbars from '../../layouts/Navbars';
import { Typography, Container, Paper, List, ListItem, ListItemText, Link, CardContent, Grid, CardMedia } from '@mui/material';
import { Button, Card } from 'react-bootstrap';
import FooterPage from '../../pages/footer/FooterPage';
import aboutus from './../../assets/aboutus.jpg'

const About = () => {
  return (
  <div>
    <div >
    <div style={{ backgroundImage:`url(${backgroundImage})`,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '110vh'}}>
    <Navbars />
    
     
        
        <Container style={{padding:'1rem'}} maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 12, overflow: 'hidden' }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <img src={aboutus}  alt="Event App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item md={6}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                About Our Event App
              </Typography>
              <Typography paragraph>
                Welcome to our event app! We are dedicated to creating seamless and enjoyable experiences for event organizers and attendees alike.
              </Typography>

              <Typography variant="h5" gutterBottom>
                Key Features
              </Typography>
              <ul>
                {['Event creation and management', 'Easy registration and ticketing', 'Interactive event maps', 'Real-time updates and notifications'].map((feature, index) => (
                  <li key={index}>
                    <Typography>{feature}</Typography>
                  </li>
                ))}
              </ul>

              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                We aim to empower event organizers, foster community engagement, and create unforgettable moments that last a lifetime.
              </Typography>

              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <Typography paragraph>
                Have questions or feedback? Feel free to{' '}
                <Link href="mailto:info@eventapp.com" color="primary">
                  contact us
                </Link>
                .
              </Typography>

            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
      </div>
      </div>
      <FooterPage/>
      </div>
    
     

  )
}

export default About