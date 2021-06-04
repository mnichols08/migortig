import React from 'react'

import CustomButton from '../custom-button/component'

import './styles.scss'

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown