import React, { useState } from 'react';

const AddContact = ({addContactToArray}) => {
    const [contact, setContact] = useState({
        name:'',
        phone:'',
        image:''
      })

    function handleValues(e){
        let newContact = {
          ...contact,
          [e.target.name]: e.target.value
        } 
        console.log(newContact)
        setContact(newContact)
      }
    function addContact(){
    addContactToArray(contact)
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <input onChange={handleValues} type="text" className='col-3 m-2' placeholder='Enter name' name='name'></input>
            <input onChange={handleValues} type="number" className='col-3 m-2' placeholder='Enter phone' name='phone'></input>
            <input onChange={handleValues} type="text" className='col-3 m-2' placeholder='Enter image url' name='image'></input>
            <button onClick={()=>addContact()} className='btn btn-success'>Create contact</button>
        </div>
    );
};   

export default AddContact;