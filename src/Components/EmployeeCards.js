
import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

export default function EmployeeCards(props) { //the props parameter is how the variables passed from the parent, MainPage.js, is accessed

  return (
    <>
    <Card className="cards">
      <Card.Body>
        <Card.Title><Link to='/invoice' state={{id: props.id, name: props.name}}>{props.name}</Link></Card.Title>
        <Card.Text>
          <p>🎂Birthdate: {props.birthdate} </p>
          <p>🧁Days until birthday: {props.daysUntilBirthday} </p>
          <p>📧Email: <a href={"mailto:" + props.email}>{props.email}</a></p>
          <p>💵2012 Revenue: ${props.twentytwelve}</p>
          <p>💵2013 Revenue: ${props.twentythirteen}</p>
          <p>🧑Best Customer: {props.bestCustomer} </p>
          <p>💰Commission: ${props.commissionmet}</p>
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  )
  }