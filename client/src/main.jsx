import ReactDOM from 'react-dom/client'
import { createBrowserRouter, resolvePath, RouterProvider } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { CSSReset } from '@chakra-ui/react';

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Blog from './pages/Blog.jsx';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';

const BackgroundImageWrapper = ({ children }) => {
  return (
    <Box
      backgroundImage="url('/src/images/bg.jpg')" 
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      bgRepeat="no-repeat"
    >
      {children}
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/me',
        element: <Profile />
      }, 
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/blog',
        element: <Blog />
      } 
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <CSSReset />
    <BackgroundImageWrapper>
    <RouterProvider router={router} />
    </BackgroundImageWrapper>
  </ChakraProvider>
)