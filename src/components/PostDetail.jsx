// src/components/PostDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  // Ici, on récupère l'ID de l'article depuis l'URL (ex: /posts/1).
  const { postId } = useParams();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError('Article non trouvé.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); 

  if (loading) {
    return <div>Chargement de l'article...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/">&larr; Retour à la liste</Link>
    </article>
  );
};

export default PostDetail;