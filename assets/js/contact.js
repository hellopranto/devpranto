/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById ('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail =(e) => {
  e.preventDefault()
  
  emailjs.sendForm('service_05agv0m','template_ep9ldci','#contact-form','Jii6xaD0y_-B_oiK9')
  
  .then(() =>{
     // Show sent message
     contactMessage.textContent = 'Message sent successfully ✅'
     
    // Remove message after five seconds
       
      setTimeout (() =>{
        contactMessage.textContent = ''
      }, 5000)
      
      // Clear input fields
      
      contactForm.reset()
  }, () => {
    // Show error message
    contactMessage.textContent ='Message not sent (service error) ❌'
  })
}

contactForm.addEventListener('submit',sendEmail)