import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';

class FilmCard extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick(){
    this.props.showModal(this.props.film);
  }

  render(){
    return (
      <div className="profile-card-2 card customCard col-md-4 text-center">
        <img src={this.props.film.image} className="img img-responsive filmImg" />
        <div className="film-name">{this.props.film.film_Nom}</div>
        <div className="film-duree"> Durée : {this.props.film.film_Durée}</div>
        <div className="film-des">  {this.props.film.film_Description}</div>
        <div onClick={() => this.handleClick()} className="button-film"><FontAwesomeIcon className="faIconColor" icon={faClock} /></div>
        <div className="profile-icons"><a href="https://www.youtube.com/watch?v=Q1ioA_GnzeEab_channel=PeppaPigFran%C3%A7ais-Cha%C3%AEneOfficielle"  alt="Voir le trailer"><FontAwesomeIcon className="faIconColor" icon={faYoutube} /></a></div>
      </div>
    );
  }
}

export default FilmCard;
