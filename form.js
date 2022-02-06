const name = document.querySelector('#name')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const mobile=document.querySelector('#mobile')
const message = document.querySelector('#message')
const submitBtn = document.querySelector('#send')
const formResponse = document.querySelector('#formResponse')

submitBtn.addEventListener('click',(e)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const namev=name.value
    const emailv=email.value
    const subjectv=subject.value
    const mobilev=mobile.value
    const messagev=message.value

    var raw = JSON.stringify({"name":namev,"senderEmail":emailv,"recieverEmail":"djsaryamarketing@gmail.com","mobile":mobilev,"subject":subjectv,"message":messagev});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

fetch("https://powerful-atoll-87739.herokuapp.com/sendmail", requestOptions)
  .then(response => response.text())
  .then(result =>{
    console.log(result)
    formResponse.textContent=""
    formResponse.textContent="Message sent Successfully"

  })
  .catch(error =>{
    console.log('error', error)
    formResponse.textContent=""
    formResponse.textContent="Some error occured please try again"
    
  } );
    e.preventDefault()
})
