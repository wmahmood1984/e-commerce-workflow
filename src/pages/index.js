import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import CheckoutForm from "../components/CheckoutForm"

const  stripePromise = loadStripe("pk_test_51Hj5uqFoRvftLT4v1iVIeVed7WMNYbxIL4iflLHI6ytN1YjmF8YQ32P0imuL9iJb1q0iRHniYqyFpLB6QkYbgv3H00pSvexFVy")
export default function Home() {
  return (<div>
    
    Hello world!
    <Elements stripe={stripePromise}>

    <CheckoutForm></CheckoutForm>
    </Elements>
    </div>)
 

}
