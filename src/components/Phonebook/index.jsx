import { Component } from 'react';
import css from './Phonebook.module.css';
import shortid from 'shortid';

import Contacts from '../Contacts';
import Notification from 'components/Notification';

class Phonebook extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  handleSearch = (event) => {
    let searchData = event.currentTarget.value.toString().toUpperCase();
    console.log(searchData);
    let data = [];
    //console.log(this.state.contacts);
    if (event.currentTarget.value === '' ) {
      this.resetSearch();
    }
    
    else {this.state.contacts.forEach(search => {
      if (search.name.toUpperCase().includes(searchData)) {
        data.push(search);
        console.log(data);
        
        return data;
        
      }
    
      });

    this.setState({ contacts: data })}
       
    };

   
  

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
    this.handleSearch(event);
    
  };

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  resetSearch = () => {
    this.setState({
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    });
  };

  reset = () => {
    this.setState({name: '',
    number: '',})
    
}
  addContact = event => {
    event.preventDefault();

    let userData = {
      number: this.state.number,
      name: this.state.name,
      id: shortid.generate(),
    };

    let data = [];
    data.push(userData);

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat(data),
      };
    });

    this.reset();
  };

  render() {
    return (
      <div className={css.form}>
        <form onSubmit={this.addContact} id={this.nameInput}>
          <h1>Phonebook</h1>
          <div className={css.phonebookInput}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleNameChange}
                id={this.nameInput}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleNumberChange}
                id={this.numberInput}
              />
            </label>
            <button type="submit" className={css.buttonAddContact}>
              Add Contact
            </button>
          </div>
        </form>
        {this.state.contacts.length === 0 && (
          <Notification message="Add your first contact" />
        )}
        {this.state.contacts.length !== 0 && (
          <Contacts
            filter={this.state.filter}
            contacts={this.state.contacts}
            id={this.state.contacts.id}
            onChange={this.handleFilterChange}
            />
          
        )}
      </div>
    );
  }
}

export default Phonebook;
