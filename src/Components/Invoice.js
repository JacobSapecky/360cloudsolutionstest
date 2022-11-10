import React from 'react'
import { useLocation } from 'react-router-dom';
import {revenue2013} from '../Data/exports'
import { BestCustomer } from '../Data/functions';

export default function Invoice() {
    const location = useLocation();
    const internalID = location.state?.id; //this is used for passing data between sibling components

    const filteredinvoices = revenue2013.filter(invoice => {
        return invoice.Employee === internalID
    })

    const mappedinvoices = filteredinvoices.map(invoice =>{
        return <p>{invoice.customer} and {invoice.amount}</p>
    })



    

    return (
        <>
        {mappedinvoices}
        </>
    )



};
