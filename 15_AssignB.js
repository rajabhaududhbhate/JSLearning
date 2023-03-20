class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy" );
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const EmployeeofArray = [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];
// console.log(EmployeeofArray);


console.log("======= Employees Working in Tcs =======");
for (const Employee of EmployeeofArray) {
    const element = Employee;
    if (Employee.emp_company=="TCS") {
        
        console.log(`Employee Name : "${element.emp_name}" , Company Name : "${element.emp_company}"`);
    }
    
}


console.log("======= Employees Working in Finance Dept. =======");
for (const Employee of EmployeeofArray) {
    const element = Employee;
    if (Employee.emp_dept=="Finance") {
        
        console.log(`Employee Name : "${element.emp_name}" , Department Name : "${element.emp_dept}"`);
    }
    
}


console.log("======= Employees Name starts with 'R'=======");
for (const Employee of EmployeeofArray) {
    const element = Employee;
    if (element.emp_name.startsWith('R')) {
        
        console.log(`${element.emp_id} ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }
    
}

console.log("======= Employees whoes salary is grater than 75K=======");
for (const Employee of EmployeeofArray) {
    const element = Employee;

    if(element.emp_salary > 75000){
        console.log(`${element.emp_id} ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }

    
}



console.log("======= Employees whoes salary is grater than equal 50K from IT Dept=======");
for (const Employee of EmployeeofArray) {
    const element = Employee;

    if(element.emp_salary >= 50000 && element.emp_dept == "IT" ){
        console.log(`${element.emp_id} ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }

    
}


console.log("======= Infy Employees List=======");
for (const Employee of EmployeeofArray) {
    const element = Employee;

    if(element.emp_company == "Infy" ){
        console.log(`${element.emp_id} ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }

    
}

