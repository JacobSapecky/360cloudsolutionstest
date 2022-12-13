//I Think of these variables as some response from a HTTP Call, perhaps getting some results from a database. I put the results in a separate file and exported them so they can be easily used in other components.

export var employees = [
	{"internalid":"1", "name":"Abe Anderson", "email":"aanderson@javascript.com", "birthdate":"9/25/1974", "supervisor":"3", "2012 Revenue":"100000.00", "2013 Revenue":"0.00"},
	{"internalid":"2", "name":"Bob Benson", "email":"bbenson@javascript.com", "birthdate":"7/13/1972", "supervisor":"3", "2012 Revenue":"150000.00", "2013 Revenue":"0.00"},
	{"internalid":"3", "name":"Chelsea Chastain", "email":"cchastain@javascript.com", "birthdate":"5/7/1968", "supervisor":"", "2012 Revenue":"375000.00", "2013 Revenue":"0.00"},
	{"internalid":"4", "name":"Dwight Dwyer", "email":"ddwyer@javascript.com", "birthdate":"8/23/1982", "supervisor":"3", "2012 Revenue":"125000.00", "2013 Revenue":"0.00"},
	{"internalid":"5", "name":"Eathon Eckhart", "email":"eeckhart@javascript.com", "birthdate":"11/28/1970", "supervisor":"", "2012 Revenue":"200000.00", "2013 Revenue":"0.00"}
]; //view the console on the mainpage to view the updated employee data. 

export var revenue2013 = [
	{"type":"invoice", "customer":"Franklin", "Employee":"1", "amount":"50000.00"},
	{"type":"invoice", "customer":"Gabby", "Employee":"1", "amount":"25000.00"},
	{"type":"invoice", "customer":"Harry", "Employee":"1", "amount":"30000.00"},
	{"type":"invoice", "customer":"Ingrid", "Employee":"2", "amount":"75000.00"},
	{"type":"invoice", "customer":"Jacob", "Employee":"2", "amount":"60000.00"},
	{"type":"invoice", "customer":"Kelly", "Employee":"4", "amount":"30000.00"},
	{"type":"invoice", "customer":"Lamar", "Employee":"4", "amount":"40000.00"},
	{"type":"invoice", "customer":"Mary", "Employee":"4", "amount":"20000.00"},
	{"type":"invoice", "customer":"Nicole", "Employee":"4", "amount":"70000.00"},
	{"type":"invoice", "customer":"Oscar", "Employee":"5", "amount":"75000.00"},
	{"type":"invoice", "customer":"Patrick", "Employee":"5", "amount":"80000.00"},
	{"type":"invoice", "customer":"Quin", "Employee":"5", "amount":"60000.00"},
	{"type":"invoice", "customer":"Rachel", "Employee":"5", "amount":"100000.00"}
];

export var commissionRules = [
	{"employee" : "1", "percentage":"15%", "bonus":"2000.00"},
	{"employee" : "2", "percentage":"10%", "bonus":"3000.00"},
	{"employee" : "3", "percentage":"7.5%", "bonus":"5000.00"},
	{"employee" : "4", "percentage":"10%", "bonus":"3000.00"},
	{"employee" : "5", "percentage":"10%", "bonus":"3000.00"}
];