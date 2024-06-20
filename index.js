// Write your solution in this file!

let employee = {
    name: "Bryan",
    streetAddress: "Moi Avenue"
};

function updateEmployeeWithKeyAndValue(newEmployee,key,value){
    newEmployee = {...employee,[key]:value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(oldEmployee,key){
    oldEmployee = {...employee};
    delete oldEmployee[key];
    return oldEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,"age","30"));
console.log(employee);
console.log(deleteFromEmployeeByKey(employee,"streetAddress"));
console.log(employee);
console.log(destructivelyDeleteFromEmployeeByKey(employee,"age"));
console.log(employee);