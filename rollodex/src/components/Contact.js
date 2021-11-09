import React from 'react'
import onClick from './Button';


{/** Dont forget to set up state */}

export default function Contact(props) {

    
    const name = `${props.contact.name.first} ${props.contact.name.last}`;
    console.log(props.contact);
    console.log(props.contacts);
    return (
        <li>
            <img src={props.contact.picture.medium} alt={name} />
            <h3>{name}</h3>
            {/**Conditionally render text based on state  */}
            {/** Dont forget to wire up event handler */}
            <button>SHOW DETAILS</button>


            {/**Conditionally render more information based on state  */}


        </li>
    )
}
