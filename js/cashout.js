// console.log("cashout file connected");
document.getElementById('cashout_btn').addEventListener("click", function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input_cashout').value;
    const cashOutPin = document.getElementById('cashOut_Pin').value;


    if(cashOutPin === '1234'){
        // console.log("Cash Out button clicked");

        const accountBalanceCashout = document.getElementById('account_balance').innerText;
        const  accountBalanceCashoutNum = parseFloat(accountBalanceCashout);

        const cashOutNum = parseFloat(cashOut);

        const newBalance = accountBalanceCashoutNum - cashOutNum;

        document.getElementById('account_balance').innerText = newBalance;
        
        
        
    }else{
        alert("Failed to cash out money! Please try again");
    }
});