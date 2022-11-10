
import {revenue2013, employees, commissionRules} from './exports'

export function DaysToBirthdate(index,employeeBirthday){ //In this simulated environment, the date is 1/1/2014. If today was used I would make it dynamic by grabbing today's date and subtracting their birthdate, take account for negative values, leap years, etc.
    const todaysDate = new Date("1/1/2014");
    const empDaysUntilBirthday = Math.ceil((new Date(todaysDate.getFullYear(),employeeBirthday.getMonth(), employeeBirthday.getDate()) - todaysDate) / 1000 / 60 / 60 / 24);
    employees[index].daysuntilbirthday = empDaysUntilBirthday; //adds or updates days until birthday.
    return empDaysUntilBirthday;
}

export function BestCustomer(internalid){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === internalid});//narrows down he invoice data to the objects that only belongs to the employee.
    if (filteredrevenue.length === 0) return "N/A"; 
    else{
        let bestcustomer = filteredrevenue.sort((a,b)=>b.amount-a.amount)[0].customer;
        employees[internalid-1].bestcustomer = bestcustomer;
        return bestcustomer;
    }
}

export function Calculate2013records(internalid){
    let filteredrevenue = revenue2013.filter(invoice => {return invoice.Employee === internalid});
    let total = filteredrevenue.reduce((sum, invoice) => parseInt(invoice.amount) + sum, 0);
    employees[internalid-1].actual2013revenue = total.toFixed(2);
    return total.toFixed(2);
}

export function IsCommissionMet(index, total){
    let commission = ((parseFloat(commissionRules[index].percentage)/100) * total)
    if(total >= parseInt(employees[index]['2012 Revenue'])) commission += parseInt(commissionRules[index].bonus)
    return commission.toFixed(2);
}


