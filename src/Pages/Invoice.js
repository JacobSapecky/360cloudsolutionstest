import React from 'react'
import { useLocation } from 'react-router-dom';
import {revenue2013, employees} from '../Data/exports'
import { formatter } from '../Data/functions';
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
            <td>{formatter.format(invoice.amount)}</td>
        </tr>
        )
    });

    const teaminvoices = revenue2013.filter(invoice => {return employees[invoice.Employee -1].supervisor && employees[invoice.Employee -1].supervisor === internalID})
    const mappedteaminvoices = teaminvoices.sort((a,b)=>b.amount-a.amount).map(invoice =>{ //create a row in the table for each invoice.
        return(
        <tr>
            <td>{employees[invoice.Employee-1].name}</td>
            <td>{invoice.customer}</td>
            <td>{formatter.format(invoice.amount)}</td>
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

        {!employees[internalID-1].supervisor ? 
            <div>
            <h1 className="title">{name}'s Team Invoices</h1>
            <Table className="table" striped bordered hover>
                <thead>
                    <tr>
                        <th width="33%">Team Member</th>
                        <th width="33%">Customer Name</th>
                        <th width="33%">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedteaminvoices}
                </tbody>
            </Table>
            </div> : ""}
    </>
    )
}
