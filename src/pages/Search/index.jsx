import React, { useState, useEffect } from 'react';
import { Button, Container, Spinner } from 'reactstrap';
import { AiOutlineStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './search.scss';

function Search() {
  const [info, setInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typereq, setTypereq] = useState('');
  const { user } = useParams();

  useEffect(() => {

    api.get(`/${user}`).then(res => {
      setInfo(res.data);
      setLoading(false);
    });

  }, []);

  function reposUser(param) {
    setLoading(true);
    api.get(`/${param}/repos`).then(res => {
      if (res.data.length === 0) {
        setTypereq('Repos');
        setExist(true);
      } else {
        setExist(false);
      }
      setRepos(res.data);
      setLoading(false);
    });
  }

  function starredUser(param) {
    setLoading(true);
    api.get(`/${param}/starred`).then(res => {
      if (res.data.length === 0) {
        setTypereq('Starred');
        setExist(true);
      } else {
        setExist(false);
      }
      setRepos(res.data);
      setLoading(false);
    })
  }

  return (
    <div className="content">
      <Header />
      {
        loading
          ?
          <div className="loading">
            <Spinner color="warning" />
          </div>
          :
          ''
      }
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
                Para visualizar os repositórios do usuário basta clicar em Repos e para vizualizar os favoritos do usuário basta clicar em Starred.
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
            exist
              ?
              <div className="repos-notfound">
                <p>Infelizmente esse usuário não possui nenhum {typereq} ainda.</p>
              </div>
              :
              ''
          }
          {
            repos.map(repo => (
              <div key={repo.id} className="repo-item">
                <div className="repo-name">
                  <h3>{repo.name}</h3>
                </div>
                <div className="repo-description">
                  <p>{repo.description != null ? repo.description : ''}</p>
                </div>
                <div className="repo-infos">
                  <p className="lang">{repo.language}</p>
                  <p className="fork">Fork: {repo.forks}</p>
                  <p className="starred"><AiOutlineStar /> {repo.watchers}</p>
                </div>
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