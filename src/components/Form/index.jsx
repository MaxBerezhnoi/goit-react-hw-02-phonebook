import { Component } from 'react';
import css from './Form.module.css';
import shortid from 'shortid';
//import { userContacts } from '../Phonebook'; 

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.nameInput}>
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
    );
  }
}

export default Form;
