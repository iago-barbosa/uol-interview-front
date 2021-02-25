import React from 'react';
import {Col, Container} from 'reactstrap';

import './header.scss';
import LogoBranco from '../../assets/LogoCompasso-branco.webp';

const Header = () => {
    return (
        <header>
            <Container fluid="xl">
                <Col xs={12} className="header">
                    <img src={LogoBranco} alt="Compasso Uol Logo" className="logo" />
                </Col>
            </Container>
        </header>
    );
}

export default Header;