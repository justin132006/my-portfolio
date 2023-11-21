let tablinks = document.querySelectorAll('.list');
let tabContents = document.querySelectorAll('.tab-contents');
let btns = document.querySelectorAll('.btn');
let h1nav = document.querySelector('#h1nav');

function opentab(tabname,tab){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    for(btn of btns){
        btn.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tab).classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-tab');

    if(tab == 1){
        h1nav.textContent = 'JavaScript Syntax'
    }
    else if(tab == 2){
        h1nav.textContent = 'JavaScript Variables'
    }
    else if(tab == 3){
        h1nav.textContent = 'JavaScript Operators'
    }
    else if(tab == 4){
        h1nav.textContent = 'JavaScript Data Types'
    }
    else if(tab == 5){
        h1nav.textContent = 'JavaScript Function'
    }
    else if(tab == 6){
        h1nav.textContent = 'JavaScript Events'
    }
    else if(tab == 7){
        h1nav.textContent = 'JavaScript If Else'
    }
    else if(tab == 8){
        h1nav.textContent = 'DOM Methods'
    }
    else if(tab == 9){
        h1nav.textContent = 'DOM Document'
    }
    else if(tab == 10){
        h1nav.textContent = 'DOM Element'
    }
    else if(tab == 11){
        h1nav.textContent = 'DOM Events'
    }
    else if(tab == 12){
        h1nav.textContent = 'DOM Event Listener'
    }
}
let sidemenu = document.querySelector('#side');
let open1 = document.getElementById("open");
let close1 = document.getElementById("close");

function openmenu(){
    sidemenu.style.left = "0"
    open1.style.display = "none";
    close1.style.display = "block";
}
function closemenu(){
    sidemenu.style.left = '-200px';
    close1.style.display = "none";
    open1.style.display = "block";
}