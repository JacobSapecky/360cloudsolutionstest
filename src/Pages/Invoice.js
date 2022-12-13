import React from 'react'
import { useLocation } from 'react-router-dom';
import {revenue2013, employees} from '../Data/exports'
import { formatter } from '../Data/functions';
import Table from 'react-bootstrap/Table';

export default function Invoice() {
    const location = useLocation();
    const index = location.state?.id; //this is used for passing data between sibling components
    const name = location.state?.name;

    const filteredinvoices = revenue2013.filter(invoice => { //grab only the invoices that pertain to the employee
        return invoice.Employee === employees[index].internalid
    })

    const mappedinvoices = filteredinvoices.sort((a,b)=>b.amount-a.amount).map(invoice =>{ //create a row in the table for each invoice.
        return(
        <tr className="bodytext">
            <td>{invoice.customer}</td>
            <td>{formatter.format(invoice.amount)}</td>
        </tr>
        )
    });

    const teaminvoices = revenue2013.filter(invoice => {return employees[(employees.findIndex(object => {
        return object.internalid === invoice.Employee}))].supervisor === employees[index].internalid })
    const mappedteaminvoices = teaminvoices.sort((a,b)=>b.amount-a.amount).map(invoice =>{ //create a row in the table for each invoice.
        return(
        <tr className="bodytext">
            <td>{employees[employees.findIndex(object => {
        return object.internalid === invoice.Employee})].name}</td>
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
                <tr className="subtitle">
                    <th width="50%">Customer Name</th>
                    <th width="50%">Amount</th>
                </tr>
            </thead>
            <tbody>
                {mappedinvoices}
            </tbody>
        </Table>
        
        {!employees[index].supervisor ? //task 6. If they are a supervisor, show their team's performance as a whole. (currently supports simple supervisor-employee relationships. i.e no nested relationships)
            <div>
            <h1 className="title">{name}'s Team Invoices</h1>
            <Table className="table" striped bordered hover>
                <thead>
                    <tr className="subtitle">
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
