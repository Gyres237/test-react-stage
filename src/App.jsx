// src/App.jsx

import './App.css';
import PostList from './components/PostList'; 
function App() {
  return (
    <>
      <h1>Liste des Articles</h1>
      <PostList /> {/* <-- Utiliser le composant */}
    </>
  );
}

export default App;