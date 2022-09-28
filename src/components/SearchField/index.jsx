export default function SearchField({contacts, onCheck}) {
    return (
        <div>
            <p>
                Find contacts by name:
            </p>
            <input type="text" name="searchField" value={contacts.filter} onCheck={onCheck}/>
            
        </div >
    )
}