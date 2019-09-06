import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import { createStructuredSelector } from 'reselect'
import './menu-list.scss'
import MenuItem from '../menu-item/menu-item'
  
const MenuList = ({ sections }) => {
  return (
    <div className="container menu-list">
      {
        sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(MenuList)