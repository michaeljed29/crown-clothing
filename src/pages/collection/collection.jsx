import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors'
import './collection.scss'

import CollectionItem from '../../components/collection-item/collection-item'

const CollectionPage = ({ collection }) => {
  
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="center title">{title}</h2>
      <div className="items">
        { items.map(item => <CollectionItem key={item.id} item={item} />) }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }
}

export default connect(mapStateToProps)(CollectionPage)