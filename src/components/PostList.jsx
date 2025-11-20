import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// On définit le nombre d'articles par page dans une constante pour pouvoir la réutiliser.
const POSTS_PER_PAGE = 10;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${POSTS_PER_PAGE}`;
        const response = await axios.get(url);

        const totalCount = parseInt(response.headers['x-total-count'], 10);
        setTotalPages(Math.ceil(totalCount / POSTS_PER_PAGE));
        setPosts(response.data);

      } catch (err) {
        setError('Une erreur est survenue lors de la récupération des articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]); 

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading && posts.length === 0) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {loading && <div className="loader">Mise à jour...</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage <= 1 || loading}>
          Précédent
        </button>
        <span> Page {currentPage} sur {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages || loading}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PostList;