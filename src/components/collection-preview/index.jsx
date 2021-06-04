import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item'

import './styles.scss'

const CollectionPreview = ({ title, items, history, match }) => (
    <div className="collection-preview">
        <h1 
            className="title"
            onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
        >
            {title.toUpperCase()}
        </h1>
        <div className="preview">
            {items
            .filter((item, i) => i < 4)
            .map(item => <CollectionItem key={item.id} item={item} /> )}
        </div>
    </div>
)

export default withRouter(CollectionPreview)