import ContactsEl from 'components/ContactsEl';
//import SearchField from "components/SearchField";
import css from './Contacts.module.css';

export default function Contacts({ contacts, id, onChange, filter, children }) {
  return (
    <div className={css.contacts}>
      <h1>Contacts</h1>

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
            item={contact.name}
            itemNumber={contact.number}
            id={{ id }}
          />
        ))}
      </ul>
    </div>
  );
}
