import React, { Component } from 'react';
import { Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, Label, Input } from 'reactstrap';
import axios from 'axios'

const URL = 'http://localhost:3050/api/filmes'

class Filmes extends Component {
    constructor(props) {
        super(props)
        this.state = { filme: [] }
    }
    componentDidMount() {
        const { match: {params}} = this.props
        axios.get(`${URL}/${params.filmeId}`)
            .then(res => {
                const filme = res.data;
                this.setState({ filme });                
            }) 
    }

    render() {
        const filme = this.state.filme             
        return (
            <div>                
                <a style={{ color:'grey'}} >{filme.titulo}</a>  
                <br/>
                <a style={{ color:'grey'}} >{filme._id}</a>                
            </div>
        )
    }
}

export default Filmes;
