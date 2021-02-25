import React from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api';

// import { Container } from './styles';

function Search() {
  const { user } = useParams();

  async function searchUser () {
    console.log(user);
    const {data} = await api.get(`/users/${user}`);
    console.log(data);
  }

  searchUser();
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
}

export default Search;