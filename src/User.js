import React from 'react';
import { withRouter } from 'react-router-dom';
import urls from './constants/url-constant';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const split = this.props.location.pathname.split('/');
    const userId = parseInt(split[split.length-1], 10);
    fetch(urls.USERS)
      .then(response => response.json())
      .then(users => this.setState({ user: users.find(({ id }) => id === userId ) }) );
  }
  render() {
    return (
      <div className='container'>
        <h1>User Details</h1>
        <div>Name: {this.state && this.state.user && this.state.user.name}</div>
        <div>Phone: {this.state && this.state.user && this.state.user.phone}</div>
        <div>Website: {this.state && this.state.user && this.state.user.website}</div>
      </div>
    );
  }
}

export default withRouter(User);
