import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PostList from './components/PostList';
import ThemeToggleButton from './components/ThemeToggleButton';
import './App.css';

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <ThemeToggleButton />
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