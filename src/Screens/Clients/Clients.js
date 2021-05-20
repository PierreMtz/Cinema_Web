import React from 'react';
import ClientCard from './ClientCard';
import './Clients.css';
import AppNavbar from '../AppNavbar';

class Clients extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      clients: []
    }
  }

  componentDidMount(){
    fetch('https://localhost:44369/clients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        clients: data
      }, () => console.log(this.state.clients))
    })
    .catch(err => {
      console.log(err)
    });
  }

  render(){
    return (
      <div className="bodyPage">
        <AppNavbar />
        <div className="Container row">
          { this.state.clients.map(client => <ClientCard client={client} />)}
        </div>
      </div>

    );
  }
}

export default Clients;
