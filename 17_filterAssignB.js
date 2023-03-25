class Employee {
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
     this.emp_id       = emp_id;
     this.emp_name     = emp_name;
     this.emp_dept     = emp_dept;
     this.emp_salary   = emp_salary;
     this.emp_company  = emp_company;
    }
 }


 
 const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
 const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
 const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
 const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
 const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
 const emp_vinay = new Employee (88, "Vinayak", "IT", 75000, "TCS");
 const emp_mahi = new Employee (99, "Mahesh", "HR",85000, "Infy");

 let arrayOfEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi ];

 console.log(`===============================Employees from TCS using filter ==================================`); 

 let tcsEmp = arrayOfEmployees.filter(element =>{
    return element.emp_company == "TCS";
 } )
//  console.log(tcsEmp); 
let tctemparray = [];
 tcsEmp.forEach(element =>{
    tctemparray.push(`Comany Name : ${element.emp_company} and Employee Name is :${element.emp_name}`); 
 })
 console.log(tctemparray);


 console.log(`=============================== Average Salary of Wipro  ==================================`); 

let wiprosalary = arrayOfEmployees.filter(element =>element.emp_company == "Wipro"
).map(element => element.emp_salary).reduce((runningTotal, value) => runningTotal + value);
console.log("Total Salary of Wipro is:",  wiprosalary);

let numEmployees = arrayOfEmployees.filter(element =>
    element.emp_company == "Wipro"
).length
console.log("Number of Wipro Employees are:", numEmployees);

averageSalary = wiprosalary / numEmployees;
console.log("Average Salary of Wipro is:", averageSalary);

console.log(`=============================== Average Salary of Wipro & Infy ==================================`); 


let wiproInfySal = arrayOfEmployees.filter(element =>
    element.emp_company == "Wipro" || element.emp_company == "Infy"
).map(empdetails => empdetails.emp_salary)
.reduce((runningTotal, value)=>runningTotal + value);
console.log("Total Salary of Wipro is:", wiproInfySal)

let wiproInfyEmp = arrayOfEmployees.filter(element =>
    element.emp_company == "Wipro" || element.emp_company == "Infy"
).length

console.log("Number of Wipro & Infy Employees are:",wiproInfyEmp);
const avgsal = wiproInfySal/ wiproInfyEmp
console.log("Average Salary of Wipro & Infy is:",avgsal);
