import React from 'react'

export default props => (
    <header className='page-header'>
        <h2 style={{ color: 'grey' }}>{props.name} <small>{props.small}</small></h2>
    </header>
)