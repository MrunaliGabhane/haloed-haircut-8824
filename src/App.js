import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@chakra-ui/react';
// import { cardData } from './constants/data';
// import FoodCard from './components/FoodCard';
import AllRoutes from './components/AllRoutes';
import WithSubnavigation from './components/Navbar';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <Box className="App">
      <WithSubnavigation/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Box>
  );
}

export default App;
