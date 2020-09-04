import constans from './contactsConstans';
import { combineReducers } from 'redux';


const contactsReducer = (state = [], action) => {
  switch (action.type) {

    case constans.GET_CONTACT_SUCCESS:
      return action.payload;

    case constans.ADD_CONTACT_SUCCESS:
      return [...state, action.payload];

    case constans.REMOOVE_CONTACT_SUCCESS:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const errorReduser =(state = null, action) => {
  switch (action.type) {
    case constans.ADD_CONTACT_ERROR:
      return action.payload;

      case constans.ADD_CONTACT_REQUEST:
      return null;


      default:
        return state;
    }

}

const filterReducer = (state = "", action) => {
    switch (action.type) {

      case constans.FILTER_CONTACT:
        return state = action.payload
  
      default:
        return state;
    }
  };


  const sameContact = (state = false, action) => {
    switch (action.type) {

      case constans.SAME_CONTACT:
        return state = !state
  
      default:
        return state;
    }
  };

export default combineReducers({
  items: contactsReducer, 
  filter: filterReducer, 
  alert: sameContact, 
  error: errorReduser, 
});
