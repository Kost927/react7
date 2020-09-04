import axios from 'axios'
import contactsActions from '../contacts/contactsActions'



const onAddContact = (contact) => dispatch => {
    dispatch(contactsActions.addContactRequest())
    axios.post('https://bc22hwreact7.firebaseio.com/contacts.json', contact)
    .then(res => dispatch(contactsActions.addContactSuccess({...contact, id: res.data.name})))
    .catch(error => dispatch(contactsActions.addContactError( error)))

}

const fetchContacts = () => dispatch => {
    dispatch(contactsActions.getContactRequest());
  
    axios
      .get('https://bc22hwreact7.firebaseio.com/contacts.json')
      
      .then((res) => {
          if (res.data) {
        const entries = Object.entries(res.data)
        const items = entries.map(item => ({...item[1], id: item[0]}))
        dispatch(contactsActions.getContactSuccess(items))
          } else return
      
    })
      .catch(error => dispatch(contactsActions.getContactError(error)));
};



const removeContact  = id => dispatch => {
    dispatch(contactsActions.remooveContactRequest());
    axios
      .delete(`https://bc22hwreact7.firebaseio.com/contacts/${id}.json`)
  .then(() => {
    dispatch(contactsActions.remooveContactSuccess(id))})
      .catch(error => {
        dispatch(contactsActions.remooveContactError(error))});
  };

export default {onAddContact, fetchContacts, removeContact}