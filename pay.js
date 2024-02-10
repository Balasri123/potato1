var pay_input=0;

function pay(){
    pay_input=document.getElementById("pay_input").value;
    if(pay_input == 399){
   window.location = "placed.html";
}
else{
    window.location="pay.html";
}
}
