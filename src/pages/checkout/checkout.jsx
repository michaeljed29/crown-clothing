import React from 'react'
import { connect } from 'react-redux'
import './checkout.scss'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

const Checkout = ({ cartItems, total }) => {
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
              cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
          </tbody>
        </table>
        <div className="total">Total: ${total}</div>
        <div className="test-warning">
          *Please use the following test credit card for payment*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
      </div>
      
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)