import React from 'react';
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
      <div className="card col-md-3">
      </div>
    );
  }
}

export default App;
