
import ContactsEl from "components/ContactsEl";
import SearchField from "components/SearchField";
import css from "./Contacts.module.css";

export default function Contacts({ contacts, id }) {
    
    return (
        <div className={css.contacts}>
            <h1>Contacts</h1>
            <SearchField />
            <ul>
                {contacts.map(contact => (<ContactsEl item={contact.name} itemNumber={ contact.number } id ={{id}} />))} 
            </ul>
            
      </div>

    )
}