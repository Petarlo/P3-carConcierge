import React from 'react';
import { Text, Box, Heading } from "@chakra-ui/react";
import Donation from "../components/Donation";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OgISAFsjFGzdreRf0oETFWSIZwin7kOE3p41wxC1eEhR23yTR89cHlZMGwrYoFox5p3IXmVliWNa3DjJgFVIH0a00oDm2Ruju');

const AboutUs = () => {
  return (
    <Box mt="4" mx="auto" maxW="md" bg='gray.500' color='white' borderWidth="1px" borderRadius="md" boxShadow="md">
        <Heading as="h2" mb="4" textAlign="center">
          About Us
        </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, necessitatibus deleniti obcaecati voluptatum velit aliquid cum. 
        Soluta facilis accusamus corrupti sint similique. Aliquam quae laborum velit cumque nobis quasi esse.
      </Text>
      <Elements stripe={stripePromise}>
      <Donation />
      </Elements>
  </Box>
  );
}

export default AboutUs;
