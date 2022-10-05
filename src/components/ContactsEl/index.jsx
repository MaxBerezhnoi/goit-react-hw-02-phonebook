import { Fragment } from 'react';
import PropTypes from "prop-types";

export default function ContactsEl({ item, itemNumber, id, deleteContact, deleteButton, contactId }) {
  return (
    <Fragment>
      <li key={id}>
        <b>{item}</b>, {itemNumber}, 
        <button value={item} type="button" onClick={deleteContact} key={contactId} className={deleteButton}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}

ContactsEl.propTypes = {
  item: PropTypes.string.isRequired,
  itemNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  deleteButton: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
}
