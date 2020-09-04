import constans from './contactsConstans';

// !====================== ADD =========================

const addContactRequest = () => {
  return {
    type: constans.ADD_CONTACT_REQUEST,
 
  };
};

const addContactSuccess = contact => {
  return {
    type: constans.ADD_CONTACT_SUCCESS,
    payload: {
      ...contact,
      
    },
  };
};

  const addContactError = (error) => {
    return {
      type: constans.ADD_CONTACT_ERROR,
      payload: error,
    };
  };

// !==================== GET ===========================

const getContactRequest = () => {
  return {
    type: constans.GET_CONTACT_REQUEST,
    
  };
};

const getContactSuccess = (contacts) => {
  return {
    type: constans.GET_CONTACT_SUCCESS,
    payload: contacts
  };
};

const getContactError = () => {
  return {
    type: constans.GET_CONTACT_ERROR,
    
  };
};
// !====================== REMOOVE =========================

const remooveContactRequest = () => {
  return {
    type: constans.REMOOVE_CONTACT_REQUEST,
    
  };
};

const remooveContactSuccess = (id) => {
  return {
    type: constans.REMOOVE_CONTACT_SUCCESS,
    payload: id
  };
};

const remooveContactError = (error) => {
  return {
    type: constans.REMOOVE_CONTACT_ERROR,
    payload: { error }
    
  };
};


// !===============================================


  const filterContacts = e => {
    return {
      type: constans.FILTER_CONTACT,
      payload: e.target.value,
    };
  };

  const sameContact = () => {
    return {
      type: constans.SAME_CONTACT,
    };
  };

  export default { 
    filterContacts, 
    sameContact, 

    addContactRequest, 
    addContactSuccess, 
    addContactError,

    getContactRequest,
    getContactSuccess,
    getContactError,

    remooveContactRequest,
    remooveContactSuccess,
    remooveContactError,
  }