import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';


class FilmCard extends React.Component {
  constructor(props){
    super(props)
  }

 

  render(){
    return (
      <div className="profile-card-2 card customCard col-md-4 text-center">
        <img src={this.props.film.image} className="img img-responsive filmImg" />
        <div className="film-name">{this.props.film.film_Nom}</div>
        <div className="film-duree"> Durée : {this.props.film.film_Durée}</div>
        <div className="film-des">  {this.props.film.film_Description}</div>
        <div className="profile-icons"><a href="https://www.youtube.com"  alt="Voir le trailer"><FontAwesomeIcon className="faIconColor" icon={faYoutube} /></a></div>
      </div>
    );
  }
}

export default FilmCard;
