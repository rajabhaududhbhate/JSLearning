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
 const emp_mahi = new Employee (99, "Mahesh", "HR",85000, "Infy");
 const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
 const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
 const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
 const emp_vinay = new Employee (88, "Vinayak", "IT", 75000, "TCS");
 
console.log(`============Ascend Order by Employee ID============`);
 const arrayEmployess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

 arrayEmployess.sort((a, b)=>{
   return a.emp_id > b.emp_id ? a.emp_id : b.emp_id
 });

 arrayEmployess.forEach(emplyee =>{
   console.log(`Employee ID: ${emplyee.emp_id}, Employee Name:${emplyee.emp_name}, Employee Department:${emplyee.emp_dept}`);
 })

 console.log(``);
 console.log(`============Ascend Order by Employee Department============`);


 arrayEmployess.sort((a, b)=>{
   return a.emp_dept > b.emp_dept ? 1 : -1
 });

 arrayEmployess.forEach(emplyee =>{
   console.log(`Department:${emplyee.emp_dept}, ID: ${emplyee.emp_id}, Employee Name:${emplyee.emp_name} `);
 });

 console.log(``);
 console.log(`============Ascend Order by Employee salary ============`);

 arrayEmployess.sort((a, b)=>{
   return a.emp_salary > b.emp_salary ? 1 : -1 
 });

 arrayEmployess.forEach((elememt)=>{
   console.log(`Employee Name: ${elememt.emp_name}, Salary: ${elememt.emp_salary}, Company Name: ${elememt.emp_company}`);
 })

 