import React from 'react'
import Contact from './Contact'


export default function Contacts(props) {
    return (
        <ul>
            {props.contacts.map((contact) => {
                return <Contact contact={contact} />
            })}
        </ul>

    )
}
