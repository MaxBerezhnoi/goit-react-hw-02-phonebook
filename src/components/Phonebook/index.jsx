import css from "./Phonebook.module.css";
export default function Phonebook() {
    return (
        <div className={css.phonebook}>
            <h1>Phonebook</h1>
        <div className={css.phonebookInput}>    
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      />
            <button className={css.addContact}>Add Contact</button>
            </div>
    </div>  
    )
}