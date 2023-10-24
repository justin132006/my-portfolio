let list1 = document.querySelector('#list1');
let topNav = document.querySelector('#h1nav');
let sec1 = document.querySelector('#sec1');
let list2 = document.querySelector('#list2');

list1.addEventListener('click',show);
function show(){
    topNav.textContent = "JavaScript Syntax"
    sec1.classList.remove('hidden')
}
list2.addEventListener('click',show1);
function show1 (){
    topNav.textContent = 'JavaScript Variables'
    sec1.classList.add('hidden')
}
