import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosIntereptor'; 

const Home = () => {
    const [cardData, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get('/api/blog/blogs')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
            });
    }, []);

    function update_data (val) {
        navigate('/addblogs', { state: { val } });
    };

   

    return (
        <div style={{ justifyContent: 'center', display: 'flex', margin: '2%' }}>
            <Grid container spacing={4} direction="row" wrap="wrap">
                {cardData.map((row, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ width: 450, height: 350 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={row.imageUrl || 'https://via.placeholder.com/600x200'}
                                alt={row.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {row.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {row.description}
                                </Typography><br />
                                <CardActions style={{ padding: '5px' }}>
                                    <Button
                                        size="small"
                                        color="warning"
                                        onClick={() => update_data(row)}
                                        variant="contained"
                                    >
                                        UPDATE
                                    </Button>
                                    <Button
                                        size="small"
                                        color="error"
                                        variant="contained"
                                        onClick={() => delete_data(row.id)} 
                                    >
                                        DELETE
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
