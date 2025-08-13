/**
 * add event handler in add money button
 */

// step: 01
document.getElementById('addMoney_btn').addEventListener("click", function(event){
    event.preventDefault();
    const addMoney = document.getElementById('inputAdd_money').value;

    const pinNumber = document.getElementById('input_pin').value;

    if(pinNumber === '1122'){
        console.log("add money button clicked");
        const accountBalance = document.getElementById('account_balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);

        const addMoneyNumber = parseFloat(addMoney);

        const newBalance = accountBalanceNumber + addMoneyNumber;
        document.getElementById('account_balance').innerText = newBalance;
        // clear input field
        document.getElementById('input_pin').value = '';
        document.getElementById('inputAdd_money').value = '';
        
    }else{
        alert("Failed to add money! Please try again");
    }
});