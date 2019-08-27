import React from 'react'
import { connect } from 'react-redux'
import './collection-item.scss'
import CustomButton from '../../components/custom-button/custom-button'
import { addItem } from '../../redux/cart/cart-actions' 

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item


  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} className="image"/>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem)