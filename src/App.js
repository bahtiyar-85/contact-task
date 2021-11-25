import React, { useState } from 'react';
import AddContact from './component/AddContact/AddContact';
import ContactList from './component/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [contact, setContact] = useState({
  //   name:'',
  //   phone:'',
  //   image:''
  // })

  function addContactToArray(contact){
    let newContact = {
      ...contact,
      id: Date.now()
    }
    setContacts([...contacts, newContact])
    console.log(contacts);
  }

  function deleteContact(id){
    let newContacts = contacts.filter((item)=>item.id!==id)
    setContacts(newContacts)
  }

  function getContactToEdit(item){
    
  }
  
  return (
    <div>
      <AddContact addContactToArray={addContactToArray}/>
      <ContactList contacts={contacts} deleteContact={deleteContact} getContactToEdit={getContactToEdit}/>
    </div>
  );
};

export default App;