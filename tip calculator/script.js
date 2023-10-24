let bill = document.querySelector('#bill');
let tip = document.querySelector('#tip');
let member = document.querySelector('#member');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
let resulttip = document.querySelector('#resulttip');
btn.addEventListener('click',calculate);
function calculate(){
   let pay = bill.value;
   let hold;
   let people = member.value;
   let money;
   if(pay == '' || people == ''){
    resulttip.textContent = 'Tip:'
    result.textContent = "Please enter the bill amount and number of member"
   }
   else if(tip.value == 25){
    hold = pay * 0.25;
    money = hold / people;
    result.textContent = "Tip per person is " + money;
    resulttip.textContent = 'Tip:' + hold;
   }
   else if(tip.value == 20){
    hold = pay * 0.20;
    money = hold / people;
    result.textContent = "Tip per person is " + money;
    resulttip.textContent = 'Tip:' + hold;
   }
   else if(tip.value == 15){
    hold = pay * 0.15;
    money = hold / people;
    result.textContent = "Tip per person is " + money;
    resulttip.textContent = 'Tip:' + hold;
   }
   else if(tip.value == 10){
    hold = pay * 0.10;
    money = hold / people;
    result.textContent = "Tip per person is " + money;
    resulttip.textContent = 'Tip:' + hold;
   }
   else if(tip.value == 5){
    hold = pay * 0.05;
    money = hold / people;
    result.textContent = "Tip per person is " + money;
    resulttip.textContent = 'Tip:' + hold;
   }
   else{

   }
}
document.querySelector('#Reset').addEventListener('click', reset);
function reset(){
    bill.value = ''
    member.value = ''
    result.textContent = 'Result'
    resulttip.textContent = 'Tip:'
}