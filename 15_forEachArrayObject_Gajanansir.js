class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}


const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy" );
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");




const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Find the employees whose name start with R....");
arrayEmployee.forEach(employee => {
    let empName = employee.empName;
    if (empName.startsWith("R")) {
        console.log(employee);
    }
});


console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
arrayEmployee.forEach(employee => {
    if(employee.empCompany=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy + employee.empSalary; 
    }
});
console.log(totalSalaryOfInfy);