import { useDispatch, useSelector } from 'react-redux';
import { List, DeleteBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contactSlice';
const getContacts = state => state.contacts.contacts;
const getFilter = state => state.filter.filter;

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter || '');
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  // const filterContacts = filteredContacts();
  // };

  // const ContactList = ({ filterContacts, onDeleteContact }) => {
  return (
    <List>
      {filteredContacts().map(contact => (
        <li
          key={contact.id}
          style={{
            fontSize: 30,
          }}
        >
          {contact.name}: {contact.number}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </li>
      ))}
    </List>
  );
};
export default ContactList;
