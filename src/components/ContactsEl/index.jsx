export default function ContactsEl({ item , itemNumber, id }) {
    return (
        <li key={id}><b>{item}</b>, {itemNumber}</li>
    )
}