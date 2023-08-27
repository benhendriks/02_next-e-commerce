"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/stripe-js";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";
import {useRouter } from 'next/navigation'

const strikePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUPLISHABLE_KEY!
);

export default function Checkout() {
  const cartStore = useCartStore();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create an payment intent as soon as the page loads up
    fetch("/api/create-payment-intent", {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      })
    }).then((res) => {
          if(res.status === 403){
            return router.push('/api/auth/signin');
          };
          return res.json()
          // Set Client Secret and payment intent
    }).then((data) => {
      console.log(data)
    })
  }, []);
  return(
    <>
      <h1>Checkout</h1>
    </>
  )
}
