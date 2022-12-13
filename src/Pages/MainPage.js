import {employees} from '../Data/exports'
import {DaysToBirthdate, BestCustomer, Calculate2013records, IsCommissionMet} from '../Data/functions'
import EmployeeCards from '../Components/EmployeeCards';

export default function MainPage() {
    let mappedemployees = employees.map((employee, index) =>{ //for each employee, run the functions and then pass the result to the EmployeeCards component.
        let daysUntilBirthday = DaysToBirthdate(index,new Date(employee.birthdate));
        let bestCustomer = BestCustomer(index)
        let revenue2013 = Calculate2013records(index)
        let commissionmet = IsCommissionMet(index, revenue2013)
        return(
          <EmployeeCards key ={index}
          id = {index}
          name={employee.name}
          birthdate={employee.birthdate}
          email={employee.email}
          twentytwelve = {employee['2012 Revenue']}
          twentythirteen = {revenue2013}
          daysUntilBirthday = {daysUntilBirthday}
          bestCustomer = {bestCustomer}
          commissionmet = {commissionmet}
          />
        )
      })
      console.log(employees)
      const releasedate = new Date()
      console.log("Date released:" + releasedate)
  return (
    <>
    <h1 className="title" >Team Dashboard</h1>
    <section className="cardscontainer">
    {mappedemployees}
    </section>
    </>
  )
}
