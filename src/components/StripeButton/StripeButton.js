import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DOhNwizqxw02kyUrkSGcF0am005p4iGZYC";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWM Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number
};

export default StripeButton;
