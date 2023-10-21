const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let serviceType = document.getElementById('serviceType');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    serviceType: serviceType.value,
    message: message.value
  }
debugger
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onloadstart = function () {
    Swal.fire({
      title: 'Sending email...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
  };
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == 'success') {
      Swal.fire({
        icon: 'success',
        title: 'Email sent',
        showConfirmButton: false,
        timer: 1500
      });

      name.value = '';
      email.value = '';
      phoneNumber.value = '';
      serviceType.value = '';
      message.value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  xhr.send(JSON.stringify(formData));
});
