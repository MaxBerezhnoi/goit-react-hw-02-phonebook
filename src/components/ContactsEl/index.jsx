import { Fragment } from 'react';

export default function ContactsEl({ item, itemNumber, id, deleteContact, deleteButton, contactId }) {
  return (
    <Fragment>
      <li key={id}>
        <b>{item}</b>, {itemNumber}, 
        <button type="button" onClick={deleteContact} id={contactId} className={deleteButton}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}
