import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PostList from './components/PostList';
import './App.css';

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav>
        {isAuthenticated ? (
          <button onClick={logout}>Déconnexion</button>
        ) : (
          <Link to="/login">
            <button>Connexion</button>
          </Link>
        )}
      </nav>
      
      <h1>Liste des Articles</h1>
      <PostList />
    </>
  );
}

export default App;