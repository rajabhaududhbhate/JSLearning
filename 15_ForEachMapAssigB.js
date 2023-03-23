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

 const MapOfEmployees = new Map ()

 MapOfEmployees.set(22, emp_anil);
 MapOfEmployees.set(33, emp_radha);
 MapOfEmployees.set(56, emp_rishi);
 MapOfEmployees.set(66, emp_sonali);
 MapOfEmployees.set(77, emp_monika);
 MapOfEmployees.set(88, emp_vinay);
 MapOfEmployees.set(99,  emp_mahi);
 

 

 MapOfEmployees.forEach((value, key) =>{
    console.log(key, "==> Name", value.emp_name, "Department", value.emp_dept, "Company Name", value.emp_company, "Salary", value.emp_salary);
 });