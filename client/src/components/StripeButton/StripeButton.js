import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DOhNwizqxw02kyUrkSGcF0am005p4iGZYC";

  const onToken = token => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        console.log("Payment Sucess");
      })
      .catch(error => {
        console.log("Errore,", JSON.parse(error));
        alert("Warning make sure your are using corrent cart ");
      });
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
