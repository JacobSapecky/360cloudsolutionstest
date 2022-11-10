import {employees} from '../Data/exports'
import {DaysToBirthdate, BestCustomer, Calculate2013records, IsCommissionMet} from '../Data/functions'
import EmployeeCards from '../Components/EmployeeCards';

export default function MainPage() {
    let mappedemployees = employees.map((employee, index) =>{ 
        let daysUntilBirthday = DaysToBirthdate(index,new Date(employee.birthdate));
        let bestCustomer = BestCustomer(employee.internalid)
        let revenue2013 = Calculate2013records(employee.internalid)
        let commissionmet = IsCommissionMet(index, revenue2013)
        return(
          <EmployeeCards key ={employee.internalid}
          id = {employee.internalid}
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
  return (
    <>
    <h1 className="title" >Employee Dashboard</h1>
    <div className="cardscontainer">
    {mappedemployees}
    </div>
    </>
  )
}
