import React from 'react';
import { GlobalConsumer } from '../context/Context';
import List from './List';


const Following = props => {
  return (
    <>
    {
      props.state.userFollowing.map(user => {
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

export default GlobalConsumer(Following);