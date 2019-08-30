import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions'
import './checkout-item.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const { imageUrl, name, quantity, price } = cartItem
  
  return (
    <tr className="checkout-item">
      <td className="img-container"><img src={imageUrl} alt={name} /></td>
      <td>{name}</td>
      <td>
        <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
      </td>
      <td>{price}</td>
      <td><div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div></td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)

