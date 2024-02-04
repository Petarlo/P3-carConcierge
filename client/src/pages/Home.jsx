import React, { useState } from 'react';
import CarSearchBar from '../components/CarSearchBar';
import { Box } from '@chakra-ui/react';
import SearchResults from '../components/SearchResults';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (searchParams) => {
 // Replace this with your actual search logic
 const fakeSearchResults = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, type: 'sedan' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, type: 'sedan' },
    // Add more fake search results as needed
  ];

  // Set the search results in the state or handle them accordingly
  // For now, just log them to the console
  console.log('Search Parameters:', searchParams);
  console.log('Search Results:', fakeSearchResults);
};

return (
  <Box>
    <CarSearchBar onSearch={handleSearch} />
    <SearchResults results={searchResults} />
  </Box>
);
};

export default Home;
