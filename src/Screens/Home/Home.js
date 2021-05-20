import React from 'react';
import FilmCard from './Components/FilmCard'
import './Home.css'
import AppNavbar from '../AppNavbar';
import { Modal } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      films: [],
      show: false,
      modalTitle: '',
      modalBody: ''
    }
  }

  componentDidMount(){
    fetch('https://cinemovieapi.azurewebsites.net/films', {
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
        films: data
      }, console.log(this.state.films))
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleShow(film){
    this.setState({
      modalTitle: 'Horaires de ' + film.film_Nom,
      modalBody: film.film_Horraires,
      show: true
    })
  }

  handleClose(){
    this.setState({
      show: false
    })
  }

  render(){
    return (
      <div className="bodyPage">
        <AppNavbar />
        <div className="d-flex justify-content-center justify-content-around row filmsContent">
          { this.state.films.map(film => <FilmCard film={film} showModal={(e) => this.handleShow(e)} />)}
        </div>
        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalBody}
          </Modal.Body>
        </Modal>
      </div>

    );
  }
}

export default Home;
