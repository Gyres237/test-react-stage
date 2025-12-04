import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout'; 

// Importations MUI
import { 
  Container, Paper, Typography, Box, 
  CircularProgress, Alert, Button, Divider 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError('Article non trouvé ou une erreur est survenue.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  let content;
  if (loading) {
    content = (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    content = <Alert severity="error">{error}</Alert>;
  } else if (post) {
    content = (
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          {post.title}
        </Typography>
        
        <Divider sx={{ mb: 3 }} />

        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          {post.body}
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 3 }}
        >
          Retour à la liste
        </Button>
      </Paper>
    );
  }

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 2 }}>
        {content}
      </Container>
    </Layout>
  );
};

export default PostDetail;