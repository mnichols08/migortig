import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'GMAW Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'GMAW'
                },
                {
                    title: 'Arc Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'Arc'
                },
                {
                    title: 'Plastic Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                    ,
                    linkUrl: 'Plastic'
                },
                {
                    title: 'MIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'MIG'
                    
                },
                {
                    title: 'TIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'TIG'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory