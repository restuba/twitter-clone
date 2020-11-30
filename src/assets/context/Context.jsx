import React, { createContext, Component } from 'react';
import { API } from '../services/Service';

const RootContext = createContext();

const Provider = RootContext.Provider;
export const GlobalProvider = Children => {
  return (
    class ParentComponent extends Component{
      state = {
        users: [],
        seletedUser: [],
        userDetail: [],
        userActive: 'mojombo',
        userRepos: [],
        userFollowers: [],
        userFollowing: []
      }

      componentDidMount(){
        this.getAllUsers();
        this.getDetailUser(this.state.userActive);
        this.getRespoUser(this.state.userActive);
        this.getFollowers(this.state.userActive);
        this.getFollowing(this.state.userActive);
      }


      setUserActive = (data) => {
        this.setState({ userActive: data })
        this.getDetailUser(data);
        this.getRespoUser(data);
      }

      getDetailUser = (data) => {
        API.getDetailUser(data).then(result => {
          this.setState({ userDetail: result })
        })
     
      }

      getUserId = (data) => {
        const tempUserId = [...this.state.users];
        const userId = tempUserId.find(user => user.login === data);
        return userId;
      }

      getAllUsers = () => {
        API.getAllUsers().then(result => {
          this.setState({ users: result })
        })
      }

      getRespoUser = id => {
        API.getReposUser(id).then(result => {
          this.setState({ userRepos: result })
        })
      }

      getFollowers = id => {
        API.getFollowers(id).then(result => {
          this.setState({ userFollowers: result })
        })
      }

      getFollowing = id => {
        API.getFollowing(id).then(result => {
          this.setState({ userFollowing: result })
        })
      }

      render(){
        return(
          <Provider value = {
            {
              state: this.state,
              getAllUsers: this.getAllUsers,
              getUserId: this.getUserId,
              getDetailUser: this.getDetailUser,
              setUserActive: this.setUserActive
            }
          }>
            <Children {...this.props} />
          </Provider>
        );
      }
    }
  );
};



const Consumer = RootContext.Consumer;
export const GlobalConsumer = Children => {
  return(
    class ParentComponent extends Component{
      render(){
        return(
          <Consumer>
            {
              value => {
                return(
                  <Children {...this.props} {...value} />                  
                );
              }
            }
          </Consumer>
        );
      }
    }
  );
}