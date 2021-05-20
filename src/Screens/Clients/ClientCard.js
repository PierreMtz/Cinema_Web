import React from 'react';

class ClientCard extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="card text-center col-md-4">
        <div className="card-body">
          <h5 className="card-title">{this.props.client.client_Nom}</h5>
          <p className="card-title"></p>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">Plus d'info</a>
        </div>
      </div>
    );
  }
}

export default ClientCard;