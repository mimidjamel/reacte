/*function App() {
  const calculateSum = () => {
    const num1 = parseFloat(document.
      getElementById("num1").value) || 0;
    const num2 = parseFloat(document.
      getElementById("num2").value) || 0;
    document.getElementById("result").textContent =
     `Résultat: ${num1 + num2}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculateur de Somme</h2>
      <input type="number" id="num1"
       placeholder="Nombre 1" />
      <input type="number" id="num2" 
      placeholder="Nombre 2" />
      <button onClick={calculateSum}>Calculer</button>
      <p id="result">Résultat: </p>
    </div> 
  );  
  
}

export default App; 
/*import Message from "./message";

export default function App() {
  return (
    <div>
      <Message />
    </div>
  );
}  
// Demo.js est dans le fichier Demo ici nous avons inclus le composant 


// Seulement <Demo/> nous avons affiché le composant <App> à l'intérieur de la 
//import  Demo  from  "./Demo" ;
/*function  App () {
  function  Demo () {
    return (
        < div > 
           < h2 > Composant de démonstration </ h2 > 
           < p > Le composant  existe dans Demo.js </ p > 
       </ div >
   );
}
   -+
//export default Demo ;
     return (
         < Demo />
    );
}

export  default  App ; */
/*import React from 'react';
import Entete from './Entete';
import PiedDePage from './PiedDePage';
*/
import Formulaire from "./Formulaire";
function App() {
  return (
    <div>
      <Formulaire/>
    </div>
  );
}

export default App;    
/* function App(){
  function  Product ( props ) {
    return (
        < div > 
           < p > Name: {props.data.name} </ p > 
           < p > Price: {props.data.price}$ </ p > 
       </ div >
   );
}
const data = {
  name : "Samsung screen" ,
  price : 340
};
return (
  <Product data={data} />
);
}

export default App;
*/
/*import React from 'react';
import Formulaire from './Formulaire';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contactez-nous</h1>
        <Formulaire />
      </div>
    );
  }
}

export default App;
/*import React, { Component } from 'react';

class Compteur extends Component {
  constructor() {
    super();
    this.state = {
      count: 0, // Déclaration de l'état initial
    };
  }

  incrementer = () => {
    this.setState({ count: this.state.count + 1 }); // Mise à jour de l'état
  };

  render() {
    return (
      <div>
        <p>Valeur du compteur : {this.state.count}</p>
        <button onClick={this.incrementer}>Incrémenter</button>
      </div>
    );
  }
}

export default Compteur;
*/
/*import React, { useState } from 'react';

const Compteur = () => {
  const [count, setCount] = useState(0); // Déclaration de l'état

  return (
    <div>
      <p>Valeur du compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
};

export default Compteur;
*/
/*import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('Bonjour, React !'); // État local

  return (
    <div>
      <h2>Message :</h2>
      <p>{message}</p>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
    </div>
  );
};

export default Message;
*/
/*import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Bonjour, React !', // État initial
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value }); // Mise à jour de l'état
  };

  render() {
    return (
      <div>
        <h2>Message :</h2>
        <p>{this.state.message}</p>
        <input 
          type="text" 
          value={this.state.message} 
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default Message;
*/
/*import React from 'react';
import Message from './Message'; // Assurez-vous que le fichier est bien importé

const App = () => {
  return (
    <div>
      <h1>Exemple de Message</h1>
      <Message />
    </div>
  );
};

export default App;
*/


