import React from 'react';
import affiche from './img/BadBoys.jpg'; 
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state =  {
      prenom: 'Pierrito',
      nom: 'Martinez',
      age:19,
      fleur: { couleur:'rose'}
    }
  }
  handleClick(){
    this.setState({
      prenom: "Pierre"
    });
  }


  render(){
    return (
      <div className="card col-md-6">
        <img src={affiche} className="card-img-top filmImg" alt="BadBoys" />
        <div className="card-body" >
          <h5 className="card-title">BadBoys</h5>
          <p className="card-text">desc</p>
        </div>
      </div>
    );
  }
}

export default App;
