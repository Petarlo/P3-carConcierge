import React, { useState, useEffect } from 'react';
import CarSearchBar from '../components/CarSearchBar';
import { Box } from '@chakra-ui/react';
import SearchResults from '../components/SearchResults';
import { QUERY_SEARCHCARS } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [getCars, { loading, error, data }] = useLazyQuery(QUERY_SEARCHCARS);

  const handleSearch = (searchParams) => {
    getCars({
      variables: {
        ...searchParams, // Spread the searchParams into variables
      },
    });
  };

  // useEffect to handle data changes and update searchResults
  useEffect(() => {
    if (data) {
      setSearchResults(data.searchCars);
    }
  }, [data]);

  return (
    <Box>
      <CarSearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </Box>
  );
};

export default Home;
