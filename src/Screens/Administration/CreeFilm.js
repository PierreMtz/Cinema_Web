import React from 'react';
import './creefilm.scss'


class CreeFilm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      nom:'',
      duree:'',
      horaire:'',
      idsalle:'',
      lien:'',
      description:'',

    }
  }

  handlechange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
  handleClick(){  
    fetch('https://cinemovieapi.azurewebsites.net/films', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
          },
          body: JSON.stringify({
            "film_Description": this.state.description,
            "film_Horraires": this.state.horaire,
            "film_Durée": this.state.duree,
            "film_Nom": this.state.nom,
            "salle_ID": this.state.idsalle,
            "image": this.state.lien
          })
     })

    .then(response => {
    return response.json()
    })
    .then(body => {
    console.log(body)
        })
        .catch(err => {
            alert(err)
        })
    }

  render(){
    return (
        <div className='signup-container'>
  <div class='left-container'>
    <h1>
      <i className='fas fa-paw'></i>
      CINEMOOVIE
    </h1>
    <div className='imglogo'>
      <img src='https://image.flaticon.com/icons/png/512/21/21194.png' />
    </div>
  </div>
  <div className='right-container'>
    <header>
      <h1>Rempli les informations pour creer ton film !</h1>
      <div className='set'>
        <div className='pets-name'>
          <label htmlFor='pets-name'>Nom</label>
          <input id='pets-name' placeholder="Titanic" type='text' name='nom' onChange={(e) => this.handlechange(e)}/>
        </div>
      </div>
      <div className='set'>
        <div className='pets-breed'>
          <label htmlFor='pets-breed'>Duree</label>
          <input id='pets-breed' placeholder="1H34" type='text' name='duree' onChange={(e) => this.handlechange(e)} />
        </div>
        <div className='pets-birthday'>
          <label htmlFor='pets-birthday'>Horaire</label>
          <input id='pets-birthday' placeholder='HH:MM' type='text' name='horaire' onChange={(e) => this.handlechange(e)} />
        </div>
      </div>
      <div className='set'>
        <div className='pets-spayed-neutered'>
          <label htmlFor='pet-spayed'>ID de la Salle</label>
          <div className='radio-container'>
          <input id='ID_Salle' placeholder='1,2,3' type='text' name="idsalle" onChange={(e) => this.handlechange(e)} />
          </div>
        </div>
      </div>
      <div className='pets-weight'>
        <label htmlFor='pet-weight-0-25'>Lien de l'image</label>
        <div className='radio-container'>
          <input id='Lien' placeholder='https%3A%2F%2FwwA' type='text' name='lien' onChange={(e) => this.handlechange(e)}/>
        </div>
      </div>
      <div className='pets-weight'>
        <label htmlFor='pet-weight-0-25'>Description</label>
        <div className='radio-container'>
          <textarea id='description' placeholder='Description' type='text' name='description' onChange={(e) => this.handlechange(e)}></textarea>
        </div>
      </div>
    </header>
    <footer>
      <div className='set'>
        <button id='back'>Annuler</button>
        <button id='next'onClick={() => this.handleClick()} >Publier</button>
      </div>
    </footer>
  </div>
</div>
      
);
    } 
}

export default CreeFilm;
