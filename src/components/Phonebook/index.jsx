import { Component } from 'react';
import css from './Phonebook.module.css';
import shortid from 'shortid';

import Form from 'components/Form';
import { Contacts } from '../Contacts';
import Notification from 'components/Notification';

export let userContacts = [
  /*{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },*/
];

class Phonebook extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };


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

    this.setState({
      contacts: userContacts.filter(item => item.name !== deleted),
    });
     
    userContacts = userContacts.filter(item => item.name !== deleted);
    console.log(userContacts);
    return userContacts;
  };

  //Функция удаления


  resetSearch = () => {
    this.setState({
      contacts: userContacts,
    });
  };

  

  //Функция добавления контакта
  addContact = inputData => {
    const name = inputData.name;
    const number = inputData.number;
    
    console.log(name, number);
    //event.preventDefault();
    
    let userData = {
      number: number,
      name: name,
      id: shortid.generate(),
    };
  
    let data = [];
    data.push(userData);
  
    let updateData = userContacts.find(
      item => item.name.toUpperCase() === userData.name.toUpperCase()
    );
    console.log(userData.name.toUpperCase());
    
    if (updateData !== undefined) {
      
      return alert(userData.name.toUpperCase() + ' is already in contacts');
    }
    console.log(updateData);
    this.setState({ contacts: userContacts.concat(data) });
    userContacts = userContacts.concat(data);
    console.log(userContacts);
   
    return userContacts;
  };

  //Функция добавления контакта

  render() {
    return (
      <div className={css.form}>
       <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h1>Contacts</h1>
        { this.state.contacts.length === 0 &&  (
          <Contacts
            filter={this.state.filter}
            contacts={this.state.contacts}
            id={this.idDelete}
            onChange={this.handleFilterChange}
            deleteContact={this.deleteContact}
          >
            {userContacts.length !== 0  &&(<Notification message="No Contact with this name" />)}
            
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
