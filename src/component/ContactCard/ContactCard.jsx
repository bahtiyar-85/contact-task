import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ContactCard = ({item, deleteContact, getContactToEdit}) => {
    return (
        <Card className='m-3 align-items-center' style={{ width: '12rem' }}> 
            <Card.Title>{item.name}</Card.Title>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Text>{item.phone}</Card.Text>
                <Button onClick={()=>getContactToEdit(item)}>Edit</Button>
                <Button onClick={()=>deleteContact(item.id)} className='btn-danger' >Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;