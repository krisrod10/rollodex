import React from "react";
import { useEffect, useState } from "react";
import Contacts from "./components/Contacts";






const API_URL = 'https://randomuser.me/api?results=25';

// use fetch API
// use lifecycle method = useEffect

function App() {
  
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("I mounted");
    //use fetch API 
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setContacts(data.results));
  }, []);


  // useEffect(() => {
  //   console.log("I Updated");
  //   console.log(contacts);
  // }, [contacts]);


  return (
    <div className="App">
      <Contacts contacts={contacts} />
      

    </div>
  );
}

export default App;
