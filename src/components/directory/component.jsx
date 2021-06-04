import React from 'react'

import MenuItem from '../menu-item/component'

import './styles.scss'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'GMAW Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'gmaw'
                },
                {
                    title: 'Arc Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    linkUrl: 'arc'
                },
                {
                    title: 'Plastic Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1
                    ,
                    linkUrl: 'plastic'
                },
                {
                    title: 'MIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    size: 'large',
                    linkUrl: 'mig'
                    
                },
                {
                    title: 'TIG Welders',
                    imageUrl: 'https://via.placeholder.com/350x150',
                    id: 1,
                    size: 'large',
                    linkUrl: 'tig'
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