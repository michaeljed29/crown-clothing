import React from 'react'
import CartItem from '../../components/cart-item/cart-item'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import './cart-dropdown.scss'

import CustomButton from '../../components/custom-button/custom-button'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-list">
        {
          cartItems.length ? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> ) :
          <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))