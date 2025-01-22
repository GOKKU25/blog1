



import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosIntereptor';

const Addblogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const capValue = () => {
    if (location.state != null) {
      // Update existing blog
      axiosInstance
        .put('/api/blog/edit/' + location.state.val._id, formData)
        .then((res) => {
          alert(res.data.message);
          navigate('/blogs');
        })
        .catch((err) => {
          console.error(err);
          alert('Error occurred while updating the blog');
        });
    } else {
      // Add new blog
      axiosInstance
        .post('/api/blog/add', formData)
        .then((res) => {
          alert(res.data.message);
          navigate('/blogs');
        })
        .catch((err) => {
          console.error(err);
          alert('Error occurred while adding the blog');
        });
    }
  };

  useEffect(() => {
    if (location.state != null) {
      setFormData({
        title: location.state.val.title,
        description: location.state.val.description,
        imageUrl: location.state.val.imageUrl,
      });
    } else {
      setFormData({ title: '', description: '', imageUrl: '' });
    }
  }, [location.state]);

  return (
    <div>
      <div
        style={{
          marginTop: '150px',
          textAlign: 'center',
          marginLeft: '550px',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 4px black',
          width: '500px',
          padding: '20px',
        }}
      >
        <h2>{location.state ? 'Edit Blog' : 'Add Blog'}</h2>
        <TextField
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Image URL"
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData({ ...formData, imageUrl: e.target.value })
          }
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <Button color="primary" variant="contained" onClick={capValue}>
          {location.state ? 'Update' : 'Add'}
        </Button>
      </div>
    </div>
  );
};

export default Addblogs;
