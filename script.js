const form =  document.getElementById('myForm');
const email = document.querySelector('.email-input');
const errorMsg = document.querySelector('.errorMessage');
const button = document.querySelector('.successBtn');
const mainCon = document.getElementById('mainContainer');
const successCon = document.getElementById('successContainer');

mainCon.style.display = 'flex';
successCon.style.display='none';


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if  (!email.value.match (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || email === '') {
        email.classList.add('errors');
        errorMsg.innerHTML = 'Valid email required';
        email.style.color = 'red';
    } 
    else {
        email.classList.remove('errors');
        mainCon.style.display = 'none';
        successCon.style.display='grid';
        email.value = '';
        errorMsg.innerHTML = '';
    }
})


button.addEventListener('click', (event) => {
    event.preventDefault();

    if (button) {
        mainCon.style.display = 'flex';
        successCon.style.display='none';
    }
})

//VALIDATE EMAIL
/* function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  } */

/* form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateEmail(email.value) || email.value === '') {
        email.classList.add('errors');
        errorMsg.innerHTML = 'Valid email required';
         email.style.color = 'red';
        
    } else {
        email.classList.remove('errors');
        errorMsg.innerHTML= 'Email correct';
        errorMsg.style.color = 'green';
    }
})
 */


