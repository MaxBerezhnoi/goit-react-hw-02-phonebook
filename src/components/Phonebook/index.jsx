import { Component } from 'react';
import css from './Phonebook.module.css';
import shortid from 'shortid';

import Contacts from '../Contacts';
import Notification from 'components/Notification';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInput = shortid.generate();
  
  

  handleNameChange = event => {
      this.setState({ name: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  addContact = event => {
    event.preventDefault();
      
    let userData = {
      name: this.state.name,
      id: shortid.generate(),
    };

    let data = [];
    data.push(userData);
    
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat(data)
      }
    });
      
    this.reset();
   
  };

  render() {
    return (
      <div>
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
              <button type="submit" className={css.addContact}>
                Add Contact
              </button>
            </label>
          </div>
        </form>
{this.state.contacts.length === 0 && <Notification message="Add your first contact"/>}
 {this.state.contacts.length !== 0 && <Contacts contacts={this.state.contacts} id={this.state.contacts.id} />}       
      </div>
    );
  }
}

export default Phonebook;
