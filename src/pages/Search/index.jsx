import React, { useState, useEffect } from 'react';
import { Button, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './search.scss';

function Search() {
  const [info, setInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const { user } = useParams();

  useEffect(() => {

    api.get(`/${user}`).then(res => {
      console.log(res.data)
      setInfo(res.data);
      console.log(info);
    });

  }, []);

  function reposUser(param) {
    api.get(`/${param}/repos`).then(res => {
      console.log(res.data);
      setRepos(res.data);
    });
  }

  function starredUser(param) {
    api.get(`/${param}/starred`).then(res => {
      console.log(res);
    })
  }

  return (
    <div className="content">
      <Header />
      <Container fluid="xl" className="container-main">
        <div className="info-user">
          <div className="container-user">
            <img src={info.avatar_url} className="user-avatar" alt={info.name} />
            <h3 className="user-name">{info.name}</h3>
          </div>
          <div className="container-actions">
            <div className="apresentation-action">
              <p>
                A aplicação atual tem como objetivo apresentar informações básicas sobre o usuário buscado, seus repositórios e favoritos.
                Para vizualizar o perfil completo do usuário recomendamos o acesso no Github clicando <a href={info.html_url}>aqui</a>.
              </p>
            </div>
            <div className="button-action">
              <Button color="primary" className="user-repos" onClick={() => reposUser(info.login)}>Repos</Button>
              <Button color="primary" className="user-starred" onClick={() => starredUser(info.login)}>Starred</Button>
            </div>
          </div>
        </div>
        <div className="repos-container">
          {
            repos.map(repo => (
              <div key={repo.id} className="repo-item">
                <p>{repo.name}</p>
                <p>{repo.language}</p>
                <p>{repo.description != null ? repo.description : ''}</p>
              </div>
            ))
          }
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Search;