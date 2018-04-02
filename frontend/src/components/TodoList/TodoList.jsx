import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Button} from 'reactstrap';

import IconButton from '../IconButton/'
import { markAsDone, markAsPending, remove } from '../../Main/Actions/'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <div className="mx-2 my-2"  id={todo._id} key={todo._id} style={{boxShadow: '0 0 #000000'}}>
                <div className={todo.done ? 'markedAsDone' : ''}>
                    <div className="card border-0 special-card" style={{width: '8rem'}}>
                        <img className="card-img-top rounded-0 image"  src={todo.linkCapa} alt={todo._id} />
                        <div className="middle">
                        <Button style={{ backgroundColor: '#6FB914'}}><i className="fa fa-eye"></i>&nbsp; Assistir</Button>
                        </div>
                        <div className="special-card" style={{ height: '40px'}}>
                            <small className="text-white" style={{ fontSize: 11 }}>{todo.titulo}</small>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <div className="row ">
                {renderRows()}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)