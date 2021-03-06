import React from 'react'
import { connect } from 'react-redux'

import { 
    clearItemFromCart, 
    addItem, 
    removeItem
 } from '../../redux/cart/cart.actions'

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <TextContainer>{ name }</TextContainer>
            <QuantityContainer>
                { quantity > 1 ? <div onClick={() => removeItem(cartItem)}>&#8722; </div> : <div>&#8722;</div> }
                    <span>{ quantity }</span>
                <div onClick={() => addItem(cartItem)}>&#43;</div>
            </QuantityContainer>
            <TextContainer>${ price }</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem)