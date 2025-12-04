import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

// Importations MUI
import {
  Grid, Card, CardContent, Typography, CardActionArea,
  Box, CircularProgress, Pagination, Alert, Container, Avatar,
  Backdrop
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const POSTS_PER_PAGE = 10;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let isActive = true;
    const fetchPosts = async () => {
      setLoading(true);
      if (posts.length === 0) setError(null); 
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`;
        await new Promise(resolve => setTimeout(resolve, 500)); 
        const response = await axios.get(url);
        if (isActive) {
          const totalCount = parseInt(response.headers['x-total-count'], 10);
          setPosts(response.data);
          setTotalPages(Math.ceil(totalCount / POSTS_PER_PAGE));
        }
      } catch (err) {
        if (isActive) {
          setError('Une erreur est survenue lors de la récupération des articles.');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };
    fetchPosts();
    return () => { isActive = false; };
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2, position: 'relative' }}>
      <Backdrop
        sx={{ color: '#fff', position: 'absolute', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading && posts.length > 0} 
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
        Liste des Articles
      </Typography>

      {error ? (
        <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>
      ) : loading && posts.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress size={60} />
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <Card
                  variant="outlined"
                  sx={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    borderRadius: 3, transition: 'box-shadow 0.2s ease-in-out',
                    '&:hover': { boxShadow: 4, borderColor: 'primary.main' },
                  }}
                >
                  <CardActionArea
                    component={RouterLink} to={`/posts/${post.id}`}
                    sx={{
                      flexGrow: 1, p: 2, display: 'flex', justifyContent: 'flex-start',
                      alignItems: 'center', gap: 2,
                    }}
                  >
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                      <ArticleOutlinedIcon />
                    </Avatar>
                    <Typography
                      variant="subtitle1" component="h2" color="text.primary"
                      sx={{ fontWeight: '500' }}
                    >
                      {post.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default PostList;