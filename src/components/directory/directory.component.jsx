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
                    id: 1
                },
                {
                    title: 'Arc Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                },
                {
                    title: 'Plastic Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                },
                {
                    title: 'MIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                },
                {
                    title: 'TIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory