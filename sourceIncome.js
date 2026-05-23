let userData = JSON.parse(localStorage.getItem("UserIncome")); 
console.log(userData); 
function showData(){
    let j = 0;  
    if(userData.length > 0){
        for(value of userData){
            let ptag = document.createElement("p"); 
            let ptag1 = document.createElement("p"); 
            let ptag2 = document.createElement("p"); 
            let button1 = document.createElement("button");
            let button2 = document.createElement("button");
            let divtag = document.createElement("div"); 
            let divtag2 = document.createElement("div"); 
            button2.className = "deleteButton"; 
            button1.className = "editButton";
            divtag.className = "ShowUserData"
            button1.textContent = "Edit";
            button1.value = j; 
            button2.textContent = "Delete"
            button2.value = j; 
            j += 1; 

            ptag.className = "dataUser"; 
            ptag1.className = "dataUser"; 
            ptag2.className = "dataUser"; 
            divtag2.className = "dataUser"; 
            divtag2.append(button1, button2)
            ptag.textContent = value.sourceIncome;
            ptag1.textContent = value.monthlyIncome;
            ptag2.textContent = value.dates;  
            
            divtag.append(ptag, ptag1,  ptag2, divtag2)
            document.querySelector(".demo").append(divtag);
        }
    }else{
        document.getElementById("balancer").style.display = "none"; 
        document.getElementById("expensers").style.display = "none"; 
        document.querySelector(".totalText").style.display = "none"; 
    
        let divtag = document.createElement("div");
        let divtag2 = document.createElement("div"); 
        let ptag = document.createElement("p"); 
        let ptag1 = document.createElement("p"); 
        divtag2.className = "container"; 
        ptag.className = "datas"
        ptag1.className = "datas"
        ptag.textContent = "Data Not found";
        ptag1.textContent = "First You Enter your Income of Source and Income";  
        divtag.append(ptag, ptag1);
        divtag2.append(divtag); 
        document.getElementById("body").append(divtag2);
    }



    let buttonDelete = document.querySelectorAll(".deleteButton"); 
    buttonDelete.forEach((btn) => {
        btn.addEventListener("click", () => { 
            userData = userData.filter((index) => index !== userData[Number(btn.value)]); 
            localStorage.setItem("UserIncome", JSON.stringify(userData));
            location.reload();  

        }); 
    });  

    let editButton = document.querySelectorAll(".editButton"); 
    editButton.forEach((btn) => {
        btn.addEventListener("click", () => {

            let divtag = document.createElement("div"); 
            divtag.className = "popUp"; 

            let divtagInput1 = document.createElement("div"); 
            divtagInput1.className = "sameDiv"; 
            divtagInput1.id = "sameDiv1"

            let divtagInput2 = document.createElement("div"); 
            divtagInput2.className = "sameDiv"; 

            let divtagbutton = document.createElement("div"); 
            divtagbutton.className = "buttonDiv"; 

            let input1 = document.createElement("input"); 
            input1.placeholder = "Source of Income"; 
            input1.className = "inputElement"; 

            let input2 = document.createElement("input"); 
            input2.placeholder = "Monthly Income";
            input2.className = "inputElement"; 

            let bttn = document.createElement("button"); 
            bttn.textContent = "Save"; 
            bttn.className = "saveButton"

            let wordError = document.createElement("p"); 
            wordError.className = "Error";

            let incomeError = document.createElement("p"); 
            incomeError.className = "Error"

            divtagInput1.appendChild(input1); 
            divtagInput2.appendChild(input2); 
            divtagbutton.appendChild(bttn); 
            divtag.append(divtagInput1, wordError, divtagInput2, incomeError,  divtagbutton); 

            document.querySelector(".popUpEdit").append(divtag); 


            document.getElementById("balancer").style.display = "none"; 
            document.getElementById("expensers").style.display = "none";
            document.querySelector(".totalText").style.display = "none"; 

            document.querySelector(".saveButton").addEventListener("click", () => {
                wordError.style.color = "red"; 
                incomeError.style.color = "red"; 
                if(input1.value === ""){ 
                    wordError.textContent = "This field is mandatory to fill";
                }else if(!isNaN(input1.value)){
                    wordError.textContent = "Enter only character or word"; 
                }else if(input2.value === ""){
                    incomeError.textContent = "This feild is mandory to fill";
                }else if(isNaN(input2.value)){
                    incomeError.textContent = "Enter only number not character"; 
                }else{
                    userData[Number(btn.value)].sourceIncome = input1.value; 
                    userData[Number(btn.value)].monthlyIncome = input2.value; 
                    localStorage.setItem("UserIncome", JSON.stringify(userData)); 
                    location.reload();
                } 
            })
        })
    })
}
showData();

let totalamt; 
function showBalance(){
    let result = userData.filter(x => Number(x.monthlyIncome)).flatMap(x => Number(x.monthlyIncome)); 
    totalamt = result.reduce((acc, curr) => acc += curr, 0); 
    document.querySelector("#totalamt").textContent = totalamt;
}
showBalance();


let expensesData = JSON.parse(localStorage.getItem("ExpenseData")) || [];  
function showExpenses(){
    let i = 0; 
    for(value of expensesData){
        let divtag = document.createElement("div"); 
        divtag.className = "secondDiv"
        let ptag = document.createElement("p"); 
        let ptag1 = document.createElement("p"); 
        let ptag2 = document.createElement("p"); 
        let ptag3 = document.createElement("p"); 

        let button1 = document.createElement("button"); 
        let button2 = document.createElement("button");

        ptag.className = "expenseValues"; 
        ptag1.className = "expenseValues"; 
        ptag2.className = "expenseValues"; 
        ptag3.className = "expenseValues"; 
        ptag3.id = "ptag3" 

        button1.className = "button1"; 
        button2.className= "button2";

        button2.value = i; 
        button1.value = i; 
        i += 1; 

        button1.textContent = "Edit"; 
        button2.textContent = "Delete"; 

        ptag.textContent = value.categories; 
        ptag1.textContent = value.amounts; 
        ptag2.textContent = value.date;
        ptag3.append(button1, button2); 
        divtag.append(ptag, ptag1, ptag2, ptag3); 
        document.querySelector(".expenseshow").append(divtag); 
    } 

    let buttonDelete = document.querySelectorAll(".button2"); 
    buttonDelete.forEach((btn) => {
        btn.addEventListener("click", () => { 
            expensesData = expensesData.filter((index) => index !== expensesData[Number(btn.value)]); 
            localStorage.setItem("ExpenseData", JSON.stringify(expensesData));
            location.reload();  

        }); 
    }); 

    let buttonEdit = document.querySelectorAll(".button1");
    buttonEdit.forEach((btn) => {
        btn.addEventListener("click", () => {

            let divtag = document.createElement("div"); 
            divtag.className = "popUp"; 

            let divtagInput1 = document.createElement("div"); 
            divtagInput1.className = "sameDiv"; 
            divtagInput1.id = "sameDiv1"

            let divtagInput2 = document.createElement("div"); 
            divtagInput2.className = "sameDiv"; 

            let divtagbutton = document.createElement("div"); 
            divtagbutton.className = "buttonDiv"; 

            let input1 = document.createElement("input"); 
            input1.placeholder = "Enter Expense Name"; 
            input1.className = "inputElement"; 

            let input2 = document.createElement("input"); 
            input2.placeholder = "Enter amount"; 
            input2.className = "inputElement"; 

            let bttn = document.createElement("button"); 
            bttn.textContent = "Save"; 
            bttn.className = "saveButton"

            let wordError = document.createElement("p"); 
            wordError.className = "Error"; 

            let amountError = document.createElement("p"); 
            amountError.className = "Error"; 
            divtagInput1.appendChild(input1); 
            divtagInput2.appendChild(input2); 
            divtagbutton.appendChild(bttn); 
            divtag.append(divtagInput1, wordError,  divtagInput2, amountError, divtagbutton); 

            document.querySelector(".popUpEdit").append(divtag); 

            document.getElementById("balancer").style.display = "none"; 
            document.getElementById("expensers").style.display = "none";
            document.querySelector(".totalText").style.display = "none"; 

            document.querySelector(".saveButton").addEventListener("click", () => {
                wordError.style.color = "red"; 
                amountError.style.color = "red"; 
                if(input1.value === ""){
                    wordError.textContent = "This feild is mandatory to fill"; 
                }else if(!isNaN(input1.value)){
                    wordError.textContent = "Enter only character or word"; 
                }else if(input2.value === ""){
                    amountError.textContent = "This feild is mandatory to fill"; 
                }else if(isNaN(input2.value)){
                    amountError.textContent = "Enter only number not character"
                }else{
                    expensesData[Number(btn.value)].categories = input1.value; 
                    expensesData[Number(btn.value)].amounts = input2.value; 
                    localStorage.setItem("ExpenseData", JSON.stringify(expensesData)); 
                    location.reload(); 
                }
            })
        })
    })

}
showExpenses(); 

let expenseCal; 
function showTotalExpense(){
    let totalvalue = expensesData.filter(x => Number(x.amounts)).flatMap(x => Number(x.amounts)); 
    expenseCal = totalvalue.reduce((acc, curr) => acc += curr, 0); 
    document.querySelector("#totalexpense").textContent = expenseCal;
}
showTotalExpense(); 

function afterBalance(){
    let afterExpense = totalamt - expenseCal; 
    document.querySelector("#afterBalance").textContent = afterExpense
}
afterBalance(); 

 