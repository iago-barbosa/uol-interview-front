import React from 'react';
import {Col, Container} from 'reactstrap';

import './footer.scss';
import LogoBranco from '../../assets/LogoCompasso-branco.webp';

const Footer = () => {
    return (
        <footer>
            <Container fluid="xl">
                <Col xs={3}>
                    <img src={LogoBranco} alt="Compasso Uol Logo" className="logo" />
                </Col>
                <Col xs={9}>
                    <h3>Busca por usuário</h3>
                    <p>
                        Essa aplicação tem como função buscar por um usuário especifico para visualização de repositorios e favoritos. <br/>
                        Para tal, foi utilizado axios para consumir a API do Github.
                    </p>
                </Col>
            </Container>
        </footer>
    );
}

export default Footer;