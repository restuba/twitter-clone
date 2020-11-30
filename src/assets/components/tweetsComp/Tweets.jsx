import React from 'react';
import Tweet from './Tweet';
import { GlobalConsumer } from '../../context/Context';

const Tweets = props => {
  return (
    <>
    {
      props.state.userRepos.map(repo => {
        return(
          <Tweet 
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            starcount={repo.stargazers_count}
            forkcount={repo.forks_count}
            imgUrl={repo.owner.avatar_url}
          />
        )
      })
    }
    </>
  );
};

export default GlobalConsumer(Tweets);