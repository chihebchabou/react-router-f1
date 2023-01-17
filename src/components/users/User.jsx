import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../../users';

const User = () => {
  const { login } = useParams();
  const navigate = useNavigate();

  const user = users.find(el => el.login === login);

  const onClick = () => navigate('/users');
  return (
    <div className="container">
      <div className="card" style={{ width: '25%' }}>
        <img className="round-img" src={user.avatar_url} alt="avatar" />
        <h3>{user.login}</h3>
        <button className="btn btn-primary" onClick={onClick}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default User;
