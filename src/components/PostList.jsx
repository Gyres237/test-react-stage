// src/components/PostList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // EFFET DE BORD POUR RÉCUPÉRER LES DONNÉES
  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        
        setError('Une erreur est survenue lors de la récupération des articles.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  
  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;