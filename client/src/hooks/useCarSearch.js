import { useQuery } from '@apollo/client';
import { SEARCHCARS } from '../utils/queries';

const useCarSearch = () => {
  const { loading, error, data } = useQuery(SEARCHCARS);

  const searchCars = (searchParams) => {
    // You can use Apollo Client's useQuery hook here
    // to fetch the search results based on the search parameters.
    // Adjust the variables in the query according to your needs.

    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        if (error) {
          reject(error);
        } else {
          // Assuming data.cars contains the search results
          resolve(data?.cars || []);
        }
      }, 500);
    });
  };

  return {
    loading,
    error,
    searchCars,
  };
};

export default useCarSearch;
