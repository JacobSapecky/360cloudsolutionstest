import React from 'react'
import { useLocation } from 'react-router-dom';
import {revenue2013} from '../Data/exports'
import Table from 'react-bootstrap/Table';

export default function Invoice() {
    const location = useLocation();
    const internalID = location.state?.id; //this is used for passing data between sibling components
    const name = location.state?.name;

    const filteredinvoices = revenue2013.filter(invoice => { //grab only the invoices that pertain to the employee
        return invoice.Employee === internalID
    })

    const mappedinvoices = filteredinvoices.sort((a,b)=>b.amount-a.amount).map(invoice =>{ //create a row in the table for each invoice.
        return(
        <tr>
            <td>{invoice.customer}</td>
            <td>${invoice.amount}</td>
        </tr>
        )
    });

    return (
    <>
        <h1 className="title">{name}'s Invoices</h1>
        <Table className="table" striped bordered hover>
            <thead>
                <tr>
                    <th width="50%">Customer Name</th>
                    <th width="50%">Amount</th>
                </tr>
            </thead>
            <tbody>
                {mappedinvoices}
            </tbody>
        </Table>
    </>
    )
}
