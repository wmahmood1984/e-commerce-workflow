import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js"
import './CheckoutForm.css'
import React from "react"

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "red",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "blue",
      },
    },
  };

  export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const checkoutSubmit = async()=>{
        const response = await fetch("/.netlify/functions/checkout", {method: "post"});
        const data = await response.json();
        console.log("DAta = ",data);

        const result = await stripe.confirmCardPayment(data.client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                  name: 'Zia Khan',
                  email: "abc@gmail.com"
                },
            }
        })

        console.log("Result = ",result);


    }
  return <div>
      Checkout Form
      <div>
      {/*<CardElement options={CARD_ELEMENT_OPTIONS}></CardElement>*/}
      <CardNumberElement options={CARD_ELEMENT_OPTIONS}></CardNumberElement>
      <CardExpiryElement ptions={CARD_ELEMENT_OPTIONS}></CardExpiryElement>
      <CardCvcElement options={CARD_ELEMENT_OPTIONS}></CardCvcElement>
      </div>
      <button 
      onClick={checkoutSubmit}
      >Checkout</button>
      </div>
 

}
