import React, {useState} from 'react';
import { Button, Container, Form, Input } from 'reactstrap';
import {FaSearch} from 'react-icons/fa';
import {useHistory} from 'react-router-dom'

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './home.scss';


function Home() {
    const history = useHistory();
    const [search, setSearch] = useState('');

    function goSearch () {
        history.push("/"+search);
    }


    return (
        <div className="content">
            <Header />
            <Container fluid="xl" className="container-main">
                <Form className="search-container">
                    <Input type="text" name="user" value={search} onChange={(e) => setSearch(e.target.value)} id="user" placeholder="Insira o usuário" />
                    <Button className="search" onClick={() => goSearch()}><FaSearch/></Button>
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;