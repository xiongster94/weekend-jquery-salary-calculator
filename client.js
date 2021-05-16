console.log('JS loaded');

let employees = [] // create array holding box to be pushed my objects

// let employee = {} // create empty object to put values into and push into array

$(document).ready(readyNow)


                                    // Functions interacting with DOM

function readyNow(){
    console.log('JQuery loaded');
    
// Step 1: Make a Function that takes in all inputs and adds them into an object than returns an array

                //Click Listeners
$('#submitBtn').on('click', addEmployee)

// Step 2: Make a function that takes the input into a new row in the table on click

$('#submitBtn').on('click', newRow)

$('#submitBtn').on('click', clearInput) // resets input

// Step 3: Add a function to the delete button to empty the current row

$('#output').on('click', '.deleteBtn', deleteRow)

// Step 4: Implement a function to calculate the monthly total of each employee

.ready(monthlyCosts)

} // end readyNow

                                    // Functions being called to DOM

// function to add employee into array
function addEmployee(){
    console.log('button clicked');
    
    const employee = {}
    
    employee.firstName = $('#firstName').val();
    employee.lastName = $('#lastName').val();
    employee.iD = $('#iD').val();
    employee.title = $('#title').val();
    employee.annualSalary = $('#annualSalary').val();
    
    employees.push(employee)

    return console.log(employees);
    ;
} // end addEmployee


// function to clear inputs
function clearInput(){
    $('#firstName').val('')
    $('#lastName').val('')
    $('#iD').val('')
    $('#title').val('')
    $('#annualSalary').val('')
} // end clearInput


function newRow(){
    $('#output').append(`
    <tr>
    <td class="info">${$('#firstName').val()}</td>
    <td class="info">${$('#lastName').val()}</td>
    <td class="info">${$('#iD').val()}</td>
    <td class="info">${$('#title').val()}</td>
    <td class="info">$${$('#annualSalary').val()}</td>
    <td class="info">
    <button class="deleteBtn">Delete</button>
    </td>
    </tr>
    `)   
} // end newRow


// function for delete button
function deleteRow(){
    console.log('deleteBtn clicked');
    $(this).parent().parent().empty();
} // end deleteRow


// function to calculate monthly costs
