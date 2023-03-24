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

let wiproEmp = arrayOfEmployees.filter(element =>{
    return element.emp_company == "Wipro"
})
console.log(wiproEmp);



let totalsalary = 0;

wiproEmp.forEach(elment =>{
    totalsalary = totalsalary + elment.emp_salary

})
console.log(`Total Salary of wipro is : ${totalsalary}`);

const averagesalOfWipro = totalsalary / wiproEmp.length;

console.log(`Average Salary of Wipro is ${averagesalOfWipro}`);