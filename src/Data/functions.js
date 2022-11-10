
import {revenue2013, employees, commissionRules} from './exports'

export function DaysToBirthdate(index,employeeBirthday){ //In this simulated environment, the date is 1/1/2014. If today was used I would make it dynamic by grabbing today's date and subtracting their birthdate, take account for negative values, leap years, etc.
    const todaysDate = new Date("1/1/2014");
    const empDaysUntilBirthday = Math.ceil((new Date(todaysDate.getFullYear(),employeeBirthday.getMonth(), employeeBirthday.getDate()) - todaysDate) / 1000 / 60 / 60 / 24);
    employees[index].daysuntilbirthday = empDaysUntilBirthday; //adds or updates days until birthday.
    return empDaysUntilBirthday;
}

export function BestCustomer(internalid){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === internalid});//narrows down the invoice data to the objects that only belongs to the employee.
    if (filteredrevenue.length === 0) return "N/A"; 
    else{
        let bestcustomer = filteredrevenue.sort((a,b)=>b.amount-a.amount)[0].customer; //sorts invoices by amount and then gets highest amount customer
        employees[internalid-1].bestcustomer = bestcustomer; 
        return bestcustomer;
    }
}

export function Calculate2013records(internalid){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === internalid}); //narrows down the invoice data to the objects that only belongs to the employee
    let total = filteredrevenue.reduce((sum, invoice) => parseInt(invoice.amount) + sum, 0); //adds the amounts together of the filteredrevenue and stores it in the sum variable.
    employees[internalid-1].actual2013revenue = total.toFixed(2);
    return total.toFixed(2);
}

export function IsCommissionMet(index, total){
    let commission = ((parseFloat(commissionRules[index].percentage)/100) * total) //calculates commission regardless if bonus requirement met
    if(total >= parseInt(employees[index]['2012 Revenue'])) commission += parseInt(commissionRules[index].bonus) //checks if bonus requirement met, if so adds to employee's commission.
    return commission.toFixed(2);
}


