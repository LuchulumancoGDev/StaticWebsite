const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let serviceType = document.getElementById('serviceType');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    let formData ={
        name:name.value,
        email:email.value,
        phoneNumber:phoneNumber.value,
        serviceType:serviceType.value,
        message:message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload= function(){
        console.log(xhr.responseText);

        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value=' ';
            email.value=' ';
            phoneNumber.value=' ';
            serviceType.value=' ';
            message.value= ' ';
        }
        else{
            alert('Something went wrong')

        }


    }

    xhr.send(JSON.stringify(formData));
})