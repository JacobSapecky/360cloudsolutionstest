
import {revenue2013, employees, commissionRules} from './exports'

/*The methods are written in a way such that new employees can be created in the JSON and they will be generated dynamically on the web page
The methods are designed from a per employee perspective to grab the information pertaining to each through filtering, sorting, and/or reducing. 
The information is displayed per employee with a map function. */


export function DaysToBirthdate(index,employeeBirthday){ 
    const todaysDate = new Date("1/1/2014");
    const empDaysUntilBirthday = Math.ceil((new Date(todaysDate.getFullYear(),employeeBirthday.getMonth(), employeeBirthday.getDate()) - todaysDate) / 1000 / 60 / 60 / 24); //Creates a new date variable using the employees month and day of their birthday and the current year and is subtracted from todays date. The result is rounded up to prevent errors.
    employees[index].daysuntilbirthday = empDaysUntilBirthday; 
    return empDaysUntilBirthday;
}

 export function BestCustomer(index){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === employees[index].internalid});//narrows down the invoice data to the objects that only belongs to the employee, regardless of supervisor status.
    if (filteredrevenue.length === 0 && employees[index].supervisor) return "N/A"; //if they are not a supervisor and array length is 0, they do not have a customer yet.

    if (!employees[index].supervisor){//if supervisor... (task 5)
        let supervisorrevenue = revenue2013.filter(invoice => {return employees[(employees.findIndex(object => {
            return object.internalid === invoice.Employee}))].supervisor === employees[index].internalid }) //grabs all invoices of the supervisor's team.
        let totalrevenue = supervisorrevenue.concat(filteredrevenue) //add to list supervisors sales
        if (totalrevenue.length === 0) return "N/A"; 
        else{
            let bestcustomer = totalrevenue.sort((a,b) => b.amount - a.amount)[0].customer; //sorts the invoices by amount, and gets the first customer in array (the highest invoice)
            employees[index].bestcustomer = bestcustomer;
        return bestcustomer
        }
    }
    else{ //if not supervisor
        let bestcustomer = filteredrevenue.sort((a,b)=>b.amount-a.amount)[0].customer; //sorts invoices by amount and then gets the first customer in array (the highest invoice)
        employees[index].bestcustomer = bestcustomer; 
        return bestcustomer;
    }
}

export function Calculate2013records(index){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === employees[index].internalid});//narrows down the invoice data to the objects that only belongs to the employee, regardless of supervisor status.
    if(employees[index].supervisor){ //if not a supervisor
        let total = filteredrevenue.reduce((sum, invoice) => parseInt(invoice.amount) + sum, 0); //adds the amounts together of the employees invoices.
        employees[index].actual2013revenue = total.toFixed(2);
        return total.toFixed(2);
    }
    else{
        let supervisorrevenue = revenue2013.filter(invoice => {return employees[(employees.findIndex(object => {
            return object.internalid === invoice.Employee}))].supervisor === employees[index].internalid });
        let totalrevenue = supervisorrevenue.concat(filteredrevenue)
        let total = totalrevenue.reduce((sum, invoice) => parseInt(invoice.amount) + sum,0);
        employees[index].actual2013revenue = total.toFixed(2);
        return total.toFixed(2);
    }
}

export function IsCommissionMet(index, total){
    for(let i = 0; i < commissionRules.length; i++){ //looping through to make sure they are a commission employee, otherwise commission = 0. I had to do it this way because if their was an employee added without a commission set there would be an error.
        if (commissionRules[i].employee === employees[index].internalid){
            let commission = ((parseFloat(commissionRules[i].percentage)/100) * total) //calculates commission regardless if bonus requirement met
            if(total >= parseInt(employees[index]['2012 Revenue'])) commission += parseInt(commissionRules[i].bonus) //checks if bonus requirement met, if so adds to employee's commission.
            return commission.toFixed(2);
        }
    }
    return 0.00
}

export const formatter = new Intl.NumberFormat('en-US', { // a way for formatting currency
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
});