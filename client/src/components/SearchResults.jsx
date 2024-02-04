import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const SearchResults = ({ results }) => {
  return (
    <Box mt="4" p="4" borderWidth="1px" borderRadius="md" boxShadow="md">
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
                {car.make} {car.model}
              </Text>
              <Text>Year: {car.year}</Text>
              <Text>Type: {car.type}</Text>
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
