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
        axios.get(`${URL}?sort=-createdAt`)
            .then(res => {
                const filme = res.data;
                this.setState({ filme });
            })
    }
    render() {
        return (
            <div  >
                {this.state.filme.map(filme => <li key={filme._id} style={{ color:'grey'}}>{filme.titulo}</li>)}
            </div>

        )
    }
}

export default Filmes;
