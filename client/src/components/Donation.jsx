import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_DONATION } from '../utils/queries';
import auth from '../utils/auth';
import { Box, Button } from '@chakra-ui/react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51OgISAFsjFGzdreRf0oETFWSIZwin7kOE3p41wxC1eEhR23yTR89cHlZMGwrYoFox5p3IXmVliWNa3DjJgFVIH0a00oDm2Ruju');

const Donate = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [donate, { loading, data }] = useLazyQuery(QUERY_DONATION);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.donate.session });
      });
    }
  }, [data, stripePromise]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      console.log(token);
    }
  };

  useEffect(() => {
    if (auth.loggedIn()) {
      donate();
    }
  }, [donate]);

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <Box>
          <CardElement />
        </Box>
        <Button type="submit" disabled={!stripe}>
          Donate
        </Button>
      </form>
    </Elements>
  );
};

export default Donate;
