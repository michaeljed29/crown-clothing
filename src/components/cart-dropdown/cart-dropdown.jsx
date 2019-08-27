import React from 'react'

import './cart-dropdown.scss'

import CustomButton from '../../components/custom-button/custom-button'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-list">
        <div className="cart-item"></div>
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown