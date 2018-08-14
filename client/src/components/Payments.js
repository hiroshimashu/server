import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name =  "Emaily"
                description =  "$5 for 5 emaily credit"
                amount = { 500 }
                token = { token => console.log(token) }
                stripeKey = { process.env.REACT_APP_STRIPE_KEY }
            >
                <button className =  "btn">
                    ADD CREDITS
                </button>
            </StripeCheckout>
        )
    }
}

export default Payments;
