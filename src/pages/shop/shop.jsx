import React from 'react'
import { Route } from 'react-router-dom'
import './shop.scss'
import CollecitonOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collection/collection'

const ShopPage = ({ match }) => {

  return (
    <div className="container shop-page">
      <Route exact path={`${match.path}`} component={CollecitonOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage 