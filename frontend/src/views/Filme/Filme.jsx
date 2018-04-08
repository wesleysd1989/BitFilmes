import React, { Component } from 'react';
import { Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, Label, Input } from 'reactstrap';
import axios from 'axios'

const URL = 'http://localhost:3050/api/filmes'


class Filmes extends Component {
    constructor(props) {
        super(props)
        this.state = { filme: [], elenco: [], genero: [] }
    }
    componentDidMount() {
        const { match: { params } } = this.props
        axios.get(`${URL}/${params.filmeId}`)
            .then(res => {
                const filme = res.data;
                const elenco = filme.elenco;
                const genero = filme.genero;
                this.setState({ filme });
                this.setState({ elenco });
                this.setState({ genero });
            })
    }


    render() {
        const filme = this.state.filme
        return (
            <div className="row no-gutters">
                <div className="my-2 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 border-0" >
                    <div className="card-header text-center " style={{ backgroundColor: '#6FB914' }}>
                        <b>{filme.titulo}</b>
                    </div>
                    <div className="table-responsive" >
                        <table className="table table-bordered" style={{ backgroundColor: '#1F1F1F' }} >
                            <thead style={{ backgroundColor: '#1F1F1F' }}>
                                <tr style={{ backgroundColor: '#1F1F1F' }}>
                                    <th className="table-secondary border-0 " style={{ width: '10rem', padding: 0 }}>
                                        <img className="card-img-top rounded-0 image" src={filme.linkCapa} alt={filme._id} />
                                    </th>
                                    <td className="text-center table-secondary" colSpan="4" style={{ color: 'grey' }}><b>Sinopse: </b><small>{filme.sinopse}</small></td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <th className="table-secondary" scope="row" colSpan="5" style={{ color: 'grey' }}><b>Título:  <small>{filme.titulo} </small></b></th>
                                </tr>
                                <tr>
                                    <th className="table-secondary" scope="row" colSpan="5" style={{ color: 'grey' }}><b>Ano:  <small>{filme.ano} </small></b></th>
                                </tr>
                                <tr>
                                    <th className="table-secondary" scope="row" colSpan="5" style={{ color: 'grey' }}><b>Elenco:  <small>{this.state.elenco.map(elenco => <a key={elenco._id} style={{ color: 'grey' }}> - {elenco.name} </a>)}</small></b></th>
                                </tr>
                                <tr>
                                    <th className="table-secondary" scope="row" colSpan="5" style={{ color: 'grey' }}><b>Género:  <small>{this.state.genero.map(genero => <a key={genero._id} style={{ color: 'grey' }}> - {genero.name} </a>)}</small></b></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filmes;
