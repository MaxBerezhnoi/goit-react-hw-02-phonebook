import { Fragment } from 'react';
import PropTypes from "prop-types";

export default function ContactsEl({ item, itemNumber, id, deleteContact, deleteButton, contactId }) {
  return (
    <Fragment>
      <li key={id}>
        <b>{item}</b>, {itemNumber}, 
        <button value={item} type="button" onClick={deleteContact} id={ contactId} key={contactId} className={deleteButton}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}

ContactsEl.propTypes = {
  item: PropTypes.string.isRequired,
  itemNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  deleteButton: PropTypes.string,
  contactId: PropTypes.string.isRequired,
}
