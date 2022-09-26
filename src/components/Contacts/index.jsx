
import ContactsEl from "components/ContactsEl";
import css from "./Contacts.module.css";

export default function Contacts({contacts}) {
    return (
        <div className={css.contacts}>
            <h1>Contacts</h1>
            <ul><p>здесь будет список контактов</p>
                {contacts.map(contact => (<ContactsEl item={contact.name} key={contacts.id} />))} 
            </ul>
            
      </div>

    )
}