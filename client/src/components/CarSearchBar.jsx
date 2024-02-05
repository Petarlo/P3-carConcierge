import { Box, Input, Button, Flex, Select } from '@chakra-ui/react';
import { useState } from 'react';

const CarSearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    year: '',
    type: '',
  });

  const handleInputChange = (field, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <Box p="4" boxShadow="md" borderRadius="md" bg="gray.500" color='white'>
      <Flex align="center" justify="space-between">
        <Input
          placeholder="Make"
          value={searchParams.make}
          onChange={(e) => handleInputChange('make', e.target.value)}
        />
        <Input
          placeholder="Model"
          value={searchParams.model}
          onChange={(e) => handleInputChange('model', e.target.value)}
        />
        <Input
          placeholder="Year"
          value={searchParams.year}
          onChange={(e) => handleInputChange('year', e.target.value)}
        />
        <Select
          placeholder="Type"
          value={searchParams.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        >
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="truck">Truck</option>
        </Select>
        <Button colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default CarSearchBar;
