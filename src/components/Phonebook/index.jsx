import { Component } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

import Contacts from '../Contacts';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  id = nanoid(5);

  handleNameChange = event => {
      this.setState({ name: event.currentTarget.value });
      console.log(this.state.name);
  };

  reset = () => {
    this.setState({ name: '' });
  };

  addContact = event => {
    event.preventDefault();
    let userData = {
      name: this.state.name,
      id: this.id,
      };
      console.log(userData);
    this.setState({
      contacts: this.state.contacts.concat(userData),
    });
    this.reset();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addContact} id={this.id}>
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
                id={this.id}
              />
              <button type="submit" className={css.addContact}>
                Add Contact
              </button>
            </label>
          </div>
        </form>

        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
