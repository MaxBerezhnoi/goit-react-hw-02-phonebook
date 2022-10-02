import { Component } from 'react';
import css from './Phonebook.module.css';
import shortid from 'shortid';

import Contacts from '../Contacts';
import Notification from 'components/Notification';

let userContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class Phonebook extends Component {
  state = {
    contacts: userContacts,
    name: '',
    number: '',
    filter: '',
  };

  nameInput = shortid.generate();
  numberInput = shortid.generate();
  idDelete = shortid.generate();

  //Функция фильтра
  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });

    let searchData = event.currentTarget.value.toString().toUpperCase();
    console.log(searchData);
    let data = [];

    this.state.contacts.forEach(search => {
      let updateData = search.name.toUpperCase().includes(searchData);
      console.log(updateData);
      if (updateData === true) {
        data.push(search);
        return data;
      }
    });

    if (event.currentTarget.value === '') {
      this.resetSearch();
      return;
    } else {
      this.setState({ contacts: data });
    }
  };
  //Функция фильтра

  //Функция удаления

  deleteContact = e => {
    let deleted = e.currentTarget.value;
    console.log(e.currentTarget);
    console.log(deleted);
    
    this.setState(
      {contacts: userContacts.filter(item => item.name !== deleted
      
          )}
        
     )
    userContacts = userContacts.filter(
      item => item.name !== deleted
      
    );
    console.log(userContacts);
    return userContacts; 
  };

  //Функция удаления

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  resetSearch = () => {
    this.setState({
      contacts: userContacts,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  //Функция добавления контакта
  addContact = event => {
    event.preventDefault();

    let userData = {
      number: this.state.number,
      name: this.state.name,
      id: shortid.generate(),
    };

    let data = [];
    data.push(userData);
    let updateData = userContacts.find(
      item => item.name.toUpperCase() === userData.name.toUpperCase()
    );

    if (updateData !== undefined) {
      this.reset();
      return alert(userData.name.toUpperCase() + ' is already in contacts');
      
    }
    
    this.setState({ contacts: userContacts.concat(data) });
   userContacts = userContacts.concat(data);
    console.log(userContacts);
    this.reset();
    return userContacts;
  };
//Функция добавления контакта

  render() {
    return (
      <div className={css.form}>
        <form onSubmit={this.addContact} id={this.nameInput}>
          <h1>Phonebook</h1>
          <div className={css.phonebookInput}>
            <label>
              <b>Name: </b>
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
              <b>Number: </b>
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
          <Contacts
            filter={this.state.filter}
            contacts={userContacts}
            id={this.idDelete}
            onChange={this.handleFilterChange}
            deleteContact={this.deleteContact}
          >
            <Notification message="No Contact with this name" />
          </Contacts>
        )}
        {this.state.contacts.length !== 0 && (
          <Contacts
            filter={this.state.filter}
            contacts={this.state.contacts}
            id={this.idDelete}
            onChange={this.handleFilterChange}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default Phonebook;
