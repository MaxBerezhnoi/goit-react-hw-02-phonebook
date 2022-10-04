import PropTypes from "prop-types";
export default function SearchField({ contacts, onCheck }) {
    return (
        <div>
            <p>
                Find contacts by name:
            </p>
            <input type="text" name="searchField" value={contacts.filter} onCheck={onCheck}/>
            
        </div >
    )
}

SearchField.propTypes = {
    contacts: PropTypes.array.isRequired,
    onCheck: PropTypes.func.isRequired
}