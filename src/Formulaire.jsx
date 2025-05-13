import React, { Component } from 'react';
import './Formulaire.css';
class Formulaire extends Component {
  constructor() {
    super();
    this.state = {
      nom: '',
      email: '',
      message: '',
    };
  }

 OnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  OnSubmit = (event) => {
    //event.preventDefault();
    //console.log('Données soumises :', this.state);
    alert('Formulaire soumis avec succès !');

    // Réinitialiser le formulaire après soumission
    this.setState({ nom: '', email: '', message: '' });
  };

  render() {
    return (
      <form onSubmit={this.OnSubmit}>
        <div>
          <label>Nom :</label>
          <input    type="text"  name="nom" 
           value={this.state.nom} 
            onChange={this.OnChange}   required 
          />
        </div>

        <div>
          <label>Email :</label>
          <input  type="email"    name="email" 
           value={this.state.email} 
            onChange={this.OnChange}  required 
          />    </div>    <div>
          <label>Message :</label>
          <textarea  name="message"  value={this.state.message} onChange={this.OnChange} 
            required    ></textarea>    </div>

        <button type="submit">Envoyer</button>   </form>
    );
  }
}

export default Formulaire;
