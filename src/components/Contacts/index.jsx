import ContactsEl from 'components/ContactsEl';
//import SearchField from "components/SearchField";
import css from './Contacts.module.css';

export default function Contacts({ contacts, id, onChange, filter, children, deleteContact }) {
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
                contactId={ id }
                deleteContact={deleteContact}
                deleteButton={css.deleteButton}
          />
        ))}
      </ul>
    </div>
  );
}
