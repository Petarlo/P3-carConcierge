import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const SearchResults = ({ results }) => {
  return (
    <Box mt="4" p="4" borderWidth="1px" borderRadius="md" boxShadow="md" bg='gray.500' color='white'>
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Search Results
      </Text>

      {results.length > 0 ? (
        <VStack align="start" spacing="4">
          {results.map((car) => (
            <Box
              key={car.id}
              p="4"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontSize="lg" fontWeight="bold" mb="2">
                Make:{car.make} </Text>
              <Text>Model: {car.model}</Text>
              <Text>Year: {car.year}</Text>
              <Text>Type: {car.shape}</Text>
              <Text>ListPrice: {car.listprice}</Text>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text>No results found.</Text>
      )}
    </Box>
  );
};

export default SearchResults;
