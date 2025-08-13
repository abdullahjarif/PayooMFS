// show the cashout form
document.getElementById('btn_show_cashOut').addEventListener("click", function(){
    // show cashout button clicked
    // console.log("show cashout button clicked");

    document.getElementById('cashOut_form').classList.remove('hidden');
    
    // hide the add money form
    document.getElementById('addMoney_form').classList.add('hidden');

    
});

// show add money form and hide cash out form
document.getElementById('btn_show_addMoney').addEventListener("click", function(){
    // show cashout button clicked
    // console.log("show cashout button clicked");
    document.getElementById('addMoney_form').classList.remove('hidden');
    
    // hide the add money form
    document.getElementById('cashOut_form').classList.add('hidden');
    
});