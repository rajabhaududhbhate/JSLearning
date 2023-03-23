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

const employeeOfArray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi ];

console.log("=============== Find out the `TCS` employee and log only Name & company ==================");
employeeOfArray.forEach(element =>{

    if(element.emp_company == "TCS"){
        console.log(`The employee Name is: ${element.emp_name}, and his/her company Name is :${element.emp_company}`);
    }
})

console.log("=============== Find out the employees with salary greater than equal 50000  ==================");

employeeOfArray.forEach(element =>{
    if(element.emp_salary >= 50000){
        console.log(`Employee Id: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary: ${element.emp_salary} Comapny Name: ${element.emp_company}   `);
    }
});


console.log("=============== Find the sum of all employees salary and log on console  ==================");

let totalSalary = 0;
let averagsal;
employeeOfArray.forEach(element =>{
    totalSalary = totalSalary + element.emp_salary
    

})
console.log(`Total salary of all employees are : ${totalSalary}`);

console.log("=============== Find the average of salary and log on console  ==================");
let averavesal;
employeeOfArray.forEach( element =>{
 
    let emplen = employeeOfArray.length
     averavesal = totalSalary/emplen

}

)
console.log(averavesal);


console.log("=============== Find `IT OR HR` department employees salary is greater than or equal to 75000  ==================");

employeeOfArray.forEach(element =>{
    if(element.emp_salary>= 75000 &&(element.emp_dept=="IT" || element.emp_dept == "HR")){
        console.log(`Employee Id: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary: ${element.emp_salary} Comapny Name: ${element.emp_company}   `);
    }
})




