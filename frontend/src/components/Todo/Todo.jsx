import React from 'react'

import PageHeader from '../PageHeader/'
import TodoForm from '../TodoForm/'
import TodoList from '../TodoList/'

export default props => (
    <div className="container">
        <PageHeader name='Últimos' small='Adcionados'></PageHeader>
        <TodoList />
    </div>
)