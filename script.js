let tablinks = document.querySelectorAll('.tab-links');
let tabContents = document.querySelectorAll('.tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
// contact 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwo-U7M5aQUOYGG1FGFgy4d9Pk1kgAHiutxhwg9TzGA9exTpcVIg3Fiz3oz1FJ9cE4Nhg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('Msg')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = 'Message sent successfully'
                setTimeout(function(){
                    msg.innerHTML = ''
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

// menu
let sidemenu = document.querySelector('#sidemenu');

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = '-200px';
}