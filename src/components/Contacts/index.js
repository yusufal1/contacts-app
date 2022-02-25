import { useState, useEffect } from 'react'
import './styles.css';
import List from './List';
import Form from './Form';


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Yusuf',
      phone_number: '5342471358'
    },
    {
      fullname: 'Aleyna',
      phone_number: '5412478631'
    },
    {
      fullname: 'Murat',
      phone_number: '5567413859'
    }
  ])

  useEffect(() => {
    console.log(contacts);
  }, [contacts])  

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts