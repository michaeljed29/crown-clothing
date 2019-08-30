import React from 'react'
import { connect } from 'react-redux'
import './checkout.scss'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item'

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className="container checkout-page">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map(cartItem => <CheckoutItem key={cartItem.id} {...cartItem} />)
            }
          </tbody>
        </table>
        <div className="total">Total: ${cartTotal}</div>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)