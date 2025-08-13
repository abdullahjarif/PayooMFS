// console.log("Homepage Added");

/**
 * s-1: add event handler
 * * prevent page reload
 * s-2: get money added to the account balances
 * s-3: verify the pin number
 */

// step-01:- add money to the account
document.getElementById('addMoney_btn').addEventListener("click", function (event) {
    // console.log("Add money button clicked");
    event.preventDefault(); // prevent korlam 

    // step-02:
    const addInputMoney = document.getElementById('inputAdd_money').value;
    // console.log(addInputMoney);

    const inputPinNum = document.getElementById('input_pin').value;
    // console.log(inputPinNum);

    // wrong way to validate pin number
    if (inputPinNum === '1234') {
        // console.log("Adding money to your account");

        // step-04: get the current balances
        const accountBalance = document.getElementById('account_balance').innerText;
        // console.log(accountBalance);

        // console.log(balance);

        const addMoneyNumber = parseFloat(addInputMoney);

        const balanceNumber = parseFloat(accountBalance);

        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('account_balance').innerText = newBalance;

        // console.log(typeof newBalance);
        // console.log(newBalance);




    } else {
        alert("Failed to add money! Please try again");
    }


});





