import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import news1 from '../asset/news/image (14).png';
import news2 from '../asset/news/image (15).png';
import news3 from '../asset/news/image (16).png';

const News = () => {
    const newsItems = [
        {
            date: 'Oct 1, 2024',
            title: 'Best cameras 2024 for wedding photography',
            author: 'William',
            image: news1,
        },
        {
            date: 'Oct 1, 2024',
            title: 'Best cameras 2024 for wedding photography',
            author: 'William',
            image: news2,
        },
        {
            date: 'Oct 1, 2024',
            title: 'Best cameras 2024 for wedding photography',
            author: 'William',
            image: news3,
        },
    ];

    return (
        <Container maxWidth={false} sx={{ py: 5 }}>
            <Container>
                <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        component="div"
                        color="error"
                        gutterBottom
                    >
                        Latest News
                    </Typography>
                    <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
                        We're deeply passionate catch lovely memories
                    </Typography>
                </Box>

                <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Grid container spacing={3} justifyContent="center">
                        {newsItems.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                               <Card
    sx={{
        maxWidth: 300,
        boxShadow: 'none',
        borderRadius: '10px',
        transition: 'all 0.3s ease', // Smooth transition for all properties
        '&:hover': {
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow on hover
        },
        '&:hover .card-content': { // Target the CardContent on card hover
            backgroundColor: '#ffffff',
            color: '#DA1E39',
        },
    }}
>
    <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="News Image"
        sx={{
            transition: 'transform 0.3s ease', // Smooth transition for image zoom
            '&:hover': {
                transform: 'scale(1.1)', // Zoom in the image on hover
            },
        }}
    />
    <CardContent
        className="card-content" // Add a class to easily target with hover styles
        sx={{
            backgroundColor: '#F0F0F0',
            transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth background color and text color transition
        }}
    >
        <Typography
            variant="subtitle2"
            sx={{
                backgroundColor: '#DA1E39',
                color: '#ffffff',
                display: 'inline-block',
                px: 1,
                borderRadius: '5px',
            }}
            gutterBottom
        >
            {item.date}
        </Typography>
        <Typography variant="h6" component="div">
            {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            By {item.author}
        </Typography>
    </CardContent>
</Card>


                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Container>
    );
};

export default News;
