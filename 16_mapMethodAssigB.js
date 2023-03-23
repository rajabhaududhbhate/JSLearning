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

const arrayOfEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];
 

console.log("==========  Name of Employees  ==============");
let empNames = []
arrayOfEmp.forEach(element =>{
    empNames.push(element.emp_name);
})
console.log(empNames);


console.log("==========  list of departments  ==============");
let deptList = []

arrayOfEmp.forEach(element =>{
   deptList.push(element.emp_dept); 
});

console.log(deptList);


console.log("==========  list of employees id  ==============");
let empids = []

arrayOfEmp.forEach(element =>{
    empids.push(element.emp_id); 
});

console.log(empids);



console.log("========== These employees are working in TCS  ==============");


arrayOfEmp.forEach(element =>{

    if(element.emp_company == "TCS"){
        console.log(element.emp_name);

    }
   
});

