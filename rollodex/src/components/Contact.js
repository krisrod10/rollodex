import React from 'react'





{/** Dont forget to set up state */}


export default function Contact(props) {
   let handleClick = (event) => {
        return(
            <li>{}</li>
        )
        }
    
   const name = `${props.contact.name.first} ${props.contact.name.last}`;
    console.log(props.contact);
    console.log(props.contacts);
    return (
        <li>
            <img src={props.contact.picture.medium} alt={name} />
            <h3>{name}</h3>
            <li>{props.contact.email}</li>
            {/**Conditionally render text based on state  */}
            {/** Dont forget to wire up event handler */}
            <button onClick = {handleClick}>Show Info</button>

            


            {/**Conditionally render more information based on state  */}


        </li>
    )
}
