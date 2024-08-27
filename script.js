const form =  document.getElementById('myForm');
const email = document.querySelector('.email-input');
const errorMsg = document.querySelector('.errorMessage');
const button = document.querySelector('.successBtn');
const mainCon = document.getElementById('mainContainer');
const successCon = document.getElementById('successContainer');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if  (!email.value.match(/^(?!\s*$)([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) || email === '') {
        email.classList.add('errors');
        errorMsg.style.display = "block"
        email.style.color = 'red';
    } 
    else {
        email.classList.remove('errors');
        mainCon.style.display = 'none';
        successCon.style.display='block';
        errorMsg.style.display = "none"
    }
})


button.addEventListener('click', (event) => {
    event.preventDefault();

    if (button) {
        mainCon.style.display = 'flex';
        successCon.style.display='none';
        location.reload();
    }
});

//VALIDATE EMAIL
/* function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateEmail(email.value) || email.value === '') {
        email.classList.add('errors');
        errorMsg.innerHTML = 'Valid email required';
         email.style.color = 'red';
        
    } else {
        email.classList.remove('errors');
        mainCon.style.display = 'none';
        successCon.style.display ='block';
        email.value = '';
        errorMsg.innerHTML = '';
    }
});

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (button) {
        mainCon.style.display = 'flex';
        successCon.style.display='none';
    }
}); */