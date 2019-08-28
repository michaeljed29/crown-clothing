import React from 'react'
import CartItem from '../../components/cart-item/cart-item'
import { connect } from 'react-redux'

import './cart-dropdown.scss'

import CustomButton from '../../components/custom-button/custom-button'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-list">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems }}) => {
  return {
    cartItems
  }
}

export default connect(mapStateToProps)(CartDropdown)