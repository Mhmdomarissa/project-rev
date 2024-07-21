 const myCheckbox = document.getElementById("myCheckbox");
 const visabtn = document.getElementById("visabtn");
 const mastercard = document.getElementById("mastercard");
 const payoal = document.getElementById("payoal");
 const mysubmit = document.getElementById("mysubmit");
 const subResult = document.getElementById("subResult");
 const paymentResult = document.getElementById("paymentResult");

 mysubmit.onclick= function() { 
    if (myCheckbox.checked) {
        subResult.textContent = `You are subscribed to our newsletter`;
 }else { 
    subResult.textContent = `You are not subscribed to our newsletter`;
 }

 if (visabtn.checked) {
    paymentResult.textContent = `Your payment method is Visa`;
 }else if (mastercard.checked) {
    paymentResult.textContent = `Your payment method is Mastercard`;
 }else if (payoal.checked) {
    paymentResult.textContent = `Your payment method is PayPal`;
 }
}