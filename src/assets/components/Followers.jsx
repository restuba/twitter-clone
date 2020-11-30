import React from 'react';
import { GlobalConsumer } from '../context/Context';
import List from './List';

const Followers = props => {
  return (
    <>
    {
      props.state.userFollowers.map(user => {
        return(
          <List 
            key={user.id}
            name={user.login}
            username={user.login}
            imgUrl={user.avatar_url}
            onClick={() => props.setUserActive(user.login)}
          /> 
        )
      })
    }
     
    </>
  );
};

export default GlobalConsumer(Followers);