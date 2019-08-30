import React from 'react'

import './checkout-item.scss'

const CheckoutItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <tr className="checkout-item">
      <td className="img-container"><img src={imageUrl} alt={name} /></td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{quantity * price}</td>
      <td>&#10005;</td>
    </tr>
  )
}

export default CheckoutItem

