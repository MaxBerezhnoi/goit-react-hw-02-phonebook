import ContactsEl from 'components/ContactsEl';

import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({
  contacts,
  onChange,
  filter,
  children,
  deleteContact,
}) => {
  return (
    <div className={css.contacts}>
      <div className={css.findForm}>
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
            key={contact.id}
            id={contact.id}
            item={contact.name}
            itemNumber={contact.number}
            contactId={contact.id}
            deleteContact={deleteContact}
            deleteButton={css.deleteButton}
          />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,

  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.element,
  deleteContact: PropTypes.func.isRequired,
};
