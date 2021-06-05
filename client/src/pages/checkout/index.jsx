import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './styles'

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
        <HeaderBlockContainer>
            <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Remove</span>
        </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: {Math.floor(Math.random() * 12) + 1}/{parseInt(new Date().getFullYear().toString().slice(-2)) + 1 } - CVV: {Math.floor(Math.random() * 899) + 100}
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)