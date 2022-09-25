import Phonebook from "./Phonebook";
import Contacts from "./Contacts";

const { Component } = require("react")

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };


  render() {
    return (
      
        <div
        style={{
            height: '100vh',
          display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101'
          }}
        >
          React homework template 2-2
        <Phonebook />
      <Contacts />  
        
      </div> 
      
    )
  };
};

export default App;
