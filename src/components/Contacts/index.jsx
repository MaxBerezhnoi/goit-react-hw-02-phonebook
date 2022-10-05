import ContactsEl from 'components/ContactsEl';
//import SearchField from "components/SearchField";
import css from './Contacts.module.css';
import PropTypes from "prop-types";

export const Contacts=({ contacts, id, onChange, filter, children, deleteContact , contactId}) => {
  return (
    <div className={css.contacts}>
      

      <div>
        <p>Find contacts by name:</p>
          <input
            type="text"
            name="searchField"
            value={filter}
            onChange={onChange}
            onInput={onChange}
          />
              <p className={css.noSearch}>{children}</p>
        
      </div>
      <ul>
        {contacts.map(contact => (
          <ContactsEl
            key = {id}
                id ={id}
            item={contact.name}
            itemNumber={contact.number}
                contactId={ contactId }
                deleteContact={deleteContact}
                deleteButton={css.deleteButton}
          />
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  deleteContact: PropTypes.func.isRequired,
}
