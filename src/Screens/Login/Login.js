import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state={
        login:'',
        password:'',
        loggedIn: false
    }
  }

  handlechange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleclick(){
    fetch('https://cinemovieapi.azurewebsites.net/auth/signin', {
       method: 'POST',
       headers:  {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
       body: JSON.stringify({
           'email':this.state.login,
           'password':this.state.password
       })
   })
   .then(reponse => {
       if(reponse.status !== 200){
           throw("Erreur de connexion.");
       }
       return reponse.json()
   })

   .then(body => {
       localStorage.setItem('access_token', body)
       this.setState({
           loggedIn: true
       })
   })
   .catch(err => {
       alert(err)
   })
}

  render(){
    return (
        <div>
            {this.state.loggedIn ===true ? <Redirect to="/" /> : null}
            <div>
                <label>Login</label>
                <input type="text" name="login" onChange={(e) => this.handlechange(e)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" onChange={(e) => this.handlechange(e)}/>
            </div>
            <div>
                <button type="button" onClick={() => this.handleclick()}>Login</button>
            </div>
        </div>
    );
  }
}

export default Login;
// Le export sert pour le import au dessus