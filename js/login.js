// console.log("file added");

// document.getElementById('id').addEventListener("click",function(){}
// search: form submit reloading the page

// step:01--> set event handler
document.getElementById('login_Btn').addEventListener("click",function(event){
// step-02: prevent default behavior (prevent the reload page)
    event.preventDefault(); 
    console.log("login button clicked");

    // step-03: get the phone number
    const phoneNum = document.getElementById('phone_num');
    console.log(phoneNum.value);
    
    
});
