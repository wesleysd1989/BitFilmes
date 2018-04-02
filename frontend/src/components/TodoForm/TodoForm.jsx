import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../Grid/'
import IconButton from '../IconButton/'
import { add, changeTitulo, search, clear } from '../../Main/Actions/'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { clear, search, titulo } = this.props
        if (e.key === 'Enter') {
            search() 
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, titulo } = this.props
        return (
            <form role='form' className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" 
                type="search" 
                style={{ width: '250px' }}
                placeholder='Pesquise um filme' 
                aria-label="Search" 
                onChange={this.props.changeTitulo} 
                onKeyUp={this.keyHandler} 
                value={this.props.titulo} />
                <IconButton style='success' icon='search'
                    onClick={search}></IconButton>
            </form>
        )
    }
}

const mapStateToProps = state => ({ titulo: state.todo.titulo })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeTitulo, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)