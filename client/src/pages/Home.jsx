import React, { useState } from 'react';
import CarSearchBar from '../components/CarSearchBar';
import { Box } from '@chakra-ui/react';
import SearchResults from '../components/SearchResults';
import useCarSearch from '../hooks/useCarSearch'; // Import the custom hook

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { loading, error, searchCars } = useCarSearch(); // Use the custom hook

  const handleSearch = (searchParams) => {
    // Call the searchCars function from the custom hook
    searchCars(searchParams)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <Box>
      <CarSearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </Box>
  );
};

export default Home;
