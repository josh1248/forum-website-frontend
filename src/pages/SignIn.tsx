//bootstrapped off template MUI from https://github.com/mui/material-ui/tree/v5.15.6/docs/data/material/getting-started/templates/sign-in
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API_LOGIN_USER, BACKEND_API_LINK, CREATE_USER_ROUTE, HOME_ROUTE } from '../configs/config';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate(); //type inference not working here...

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const request = {
      "name": data.get("name"),
      "password": data.get("password"),
    }

    //Stick with JSON for now, can change to multipart form data if desired.
    try {
      const response = await axios.post(
        BACKEND_API_LINK + API_LOGIN_USER,
        request,
        {
          "withCredentials": true,
        }
      );

      if (response.status == 200) {
        console.log("API response:", response);
        navigate(HOME_ROUTE);
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
              <Link href={".." + CREATE_USER_ROUTE} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
          </Box>
        </Box>
        {errorText && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {errorText}
          </Typography>
        )}
      </Container>
    </ThemeProvider>
  );
}
