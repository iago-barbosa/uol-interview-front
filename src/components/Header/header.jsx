import React from 'react';
import { Col, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';


import './header.scss';
import LogoBranco from '../../assets/LogoCompasso-branco.webp';

const Header = () => {
    const history = useHistory();

    return (
        <header>
            <Container fluid="xl">
                <Col xs={12} className="header">
                    <img src={LogoBranco} alt="Compasso Uol Logo" className="logo" onClick={() => history.push("/")} />
                </Col>
            </Container>
        </header>
    );
}

export default Header;