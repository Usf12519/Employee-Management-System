// Step 2: Create Base Class
class employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
};

// Step 3: Create Subclass called Manager that extends Employee

class Manager extends Employee {
    constructor(name, department, teamsize) {
        super(name, dept)
        this.teamsize = teamsize;
    }

    describe() {
        return `${this.name} manages ${this.teamsize} people in ${this.department}`;
    }
};

// Step 4: Creating new sample employees and managers

const employees = [
    new Employee("Jake", "Finance"),
    new Employee("Sarah", "HR"),
];

for (let employee of employees) {
    console.log(employee.describe());
}

const managers = [
    new Manager("Hannah", "Finance"),
    new Manager("Nicholas", "HR"),
];

for (let manager of managers) {
    console.log(manager.describe());
}

// Step 5: Creating class called Company with property employees

class Company {
    constructor(employees) {
        this.employees = employees
        
    }
}
