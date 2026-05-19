let balance; 
let userDataArray = JSON.parse(localStorage.getItem("UserIncome")) || []; 

const sourceAdd = document.querySelector("#sourceAdd"); 
sourceAdd.addEventListener("click", () => {
    let incomeSource = document.querySelector("#incomeSource"); 
    let monthIncome = document.querySelector("#monthIncome");
    let sourceError = document.getElementById("sourceError"); 
    let errorNumber = document.getElementById("numberError");

    let date = new Date(); 

    if(incomeSource.value === ""){
        sourceError.style.color = "red"; 
        sourceError.textContent = "This field is mandatory to fill"; 
    }else if(!isNaN(incomeSource.value)){
        sourceError.style.color = "red"; 
        sourceError.textContent = "Enter only character or word"
    }else if(monthIncome.value === ""){
        errorNumber.style.color = "red"; 
        errorNumber.textContent = "This field is mandatory to fill";
    }else if(isNaN(monthIncome.value)){
        error.style.color = "red"; 
        error.textContent = "Enter only Numbers";
    }else{
        document.getElementById("numberError").textContent = ""; 
        document.getElementById("sourceError").textContent = ""; 
        balance = {
            sourceIncome : incomeSource.value,
            monthlyIncome : Number(monthIncome.value), 
            dates : date.toLocaleDateString()
        }; 
        userDataArray.push(balance); 
    }
    localStorage.setItem("UserIncome", JSON.stringify(userDataArray)); 
    incomeSource.value = ""; 
    monthIncome.value = ""    

}); 


let expenses; 
const expenseAdd = document.querySelector("#expenseAdd"); 
const expenseArray = JSON.parse(localStorage.getItem("ExpenseData")) || [];  
expenseAdd.addEventListener("click", () => {
    let category = document.querySelector("#category"); 
    let amount = document.querySelector("#amount"); 

    let d = new Date();

    let categoryError = document.getElementById("categoryError"); 
    let amountError = document.getElementById("amountError"); 

    if(category.value === ""){
        categoryError.style.color = "red"; 
        categoryError.textContent = "This feild is madatory to fill"; 
    }else if(!isNaN(category.value)){
        categoryError.style.color = "red"; 
        categoryError.textContent = "Enter only character or word"; 
    }else if(amount.value === ""){
        amountError.style.color = "red"; 
        amountError.textContent = "This field is mandatory to fill"
    }else if(isNaN(amount.value)){
        amountError.style.color = "red"; 
        amountError.textContent = "Enter only Number"; 
    }else if(userDataArray.length === 0){
        alert("Please Enter your Income Source and Income"); 
    }else{
        categoryError.textContent = ""; 
        amountError.textContent = ""; 
        expenses = { 
            categories : category.value,
            amounts : amount.value,
            date : d.toLocaleDateString()
        };  
        expenseArray.push(expenses); 
    }
    localStorage.setItem("ExpenseData", JSON.stringify(expenseArray)); 
    category.value = ""; 
    amount.value = "";
}); 




const expensetracker = document.querySelector(".expensetracker"); 
expensetracker.addEventListener("click", () => {
    window.location = "sourceIncome.html"; 
})