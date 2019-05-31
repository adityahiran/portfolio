import React from 'react';
import { Link } from 'react-router-dom';
import urls from './constants/url-constant';
import sorter from './utils/sort';
import './index.css';

export class Illustrate extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch(urls.USERS)
      .then(response => response.json())
      .then(users => { 
        users.sort(sorter.BY_NAME);
        return users;
      })
      .then(users => this.setState({ users }) );
  }
  render() {
    return (
      <div>
        <table style={{ margin: 50 }}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>E-Mail</th>
              <th>Address</th>
            </tr>
            {this.state && this.state.users && this.state.users.map((user, index) => (
              <tr key={index}>
                <td><Link to={'/illustrate/user/' + user.id}>{user.name}</Link></td>
                <td>{user.username}</td>
                <td><a href={'mailto:' + user.email} target="_blank">{user.email}</a></td>
                <td>{user.address.street}, {user.address.city}, {user.address.zipcode}</td>
              </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}