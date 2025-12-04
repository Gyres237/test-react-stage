import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

// Importations MUI
import { 
  Avatar, Button, TextField, Box, Typography, 
  Alert, Card, CardContent, Grid, Link 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => { 
    const newErrors = {};
    if (!email) newErrors.email = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Le format de l'email est invalide.";
    if (!password) newErrors.password = 'Le mot de passe est requis.';
    else if (password.length < 8) newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    if (!validateForm()) return;
    if (email === 'user@example.com' && password === 'password123') {
      const fakeToken = '12345abcdef';
      login(fakeToken);
      navigate('/');
    } else {
      setErrors({ form: 'Email ou mot de passe incorrect.' });
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 400, p: 2, borderRadius: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connexion
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {errors.form && <Alert severity="error" sx={{ width: '100%', mb: 1 }}>{errors.form}</Alert>}
              
              <TextField
                margin="dense" required fullWidth id="email"
                label="Adresse Email" name="email" autoComplete="email"
                autoFocus value={email} onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email} helperText={errors.email}
              />
              <TextField
                margin="dense" required fullWidth name="password"
                label="Mot de passe" type="password" id="password"
                autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password} helperText={errors.password}
              />
              
              <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
                <Grid >
                  <Link href="#" variant="body2">
                    Mot de passe oublié ?
                  </Link>
                </Grid>
              </Grid>

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 1 }}>
                Se connecter
              </Button>
              
              <Grid container justifyContent="flex-end">
                <Grid >
                  <Link component={RouterLink} to="/" variant="body2">
                    {"Retour à l'accueil"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
      
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Utilisez <strong>user@example.com</strong> et <strong>password123</strong>.
      </Typography>
    </Box>
  );
};

export default LoginPage;