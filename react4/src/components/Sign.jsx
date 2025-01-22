import { TextField, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; 

const Sign = () => {
  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',margin: '0',}}>
      <div style={{textAlign: 'center',padding: '30px',border: '2px solid #000',borderRadius: '8px',boxShadow: '0 4px 8px rgb(31, 41, 239)',width: '100%',maxWidth: '500px',}}>
        <Typography gutterBottom variant="h5" component="div" color="blue">BLOG APP SIGNUP</Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Password" variant="outlined" type="password" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField fullWidth label="Phone" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/" style={{ color: 'purple' }}>
                Login here
              </Link>
            </Typography>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Sign;
