// function sendMail() {
//     var params = {
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_xhtm36c";
//     const templateID = "template_2llw42o";

//     emailjs.send(serviceID,templateID,params)
//     .then((res) => {
//             document.getElementById("username").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Message sent")
//         }
//     )
//     .catch((err) => console.log(err));
// }



const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();  //prevents submission



        //checking filled fields

        if(
            contactName.value === '' || 
            contactEmail.value === '' || 
            contactSubject.value === '' || 
            contactMessage.value === ''
            ) {
                // show message
                alert('Fill all the fields.');
            }

            else{
                // service Id teplate and template id and publickey

                emailjs.sendForm(
                    'service_6reti5a',
                    'template_h9xe8nf',
                    '#contact-form',
                    '0EPvI0IvGdJGIKVnS'
                    ).then(() => {
                        errorMessage.classList.add('color-first');
                        alert('Message sent succesfully.');

                        //timer
                        setTimeout(() => {
                            errorMessage.textContent = '';
                        }, 500000);
                    }, (error) => {
                        alert('something went wrong....', error);
                    }
                    );

                    //clear form
                    contactName.value = '';
                    contactEmail.value = '';
                    contactSubject.value = '';
                    contactMessage.value = '';

            }
    };


    contactForm.addEventListener('submit', sendEmail);



















