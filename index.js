const form = document.querySelector("#form1");
const userInp = document.querySelector("#userinput");
const passInp = document.querySelector("#passinput");
const emailInp = document.querySelector("#emailinput");
const checkboxInp = document.querySelector("#checkboxinput");

const usError = document.querySelector("#usernameErrors");
const passError = document.querySelector("#passwordErrors");
const emailError = document.querySelector("#emailErrors");
const checkboxError = document.querySelector("#checkboxErrors");



form.addEventListener("submit", (e) => {
    let usermessages = []
    if (userInp.value === '' || userInp.value == null) {
        usermessages.push('İsim gerekli.')
        usError.innerHTML = usermessages.join(', ')
    } else {
        usError.innerHTML = ""
    }
    let passwordmessages = []
    if (passInp.value === '' || passInp.value == null) {
        passwordmessages.push('Şifre gerekli.')
    }
    if (passInp.value.length < 8) {
        passwordmessages.push('Şifreniz 8 karakterden az olamaz.')
    }
    passError.innerHTML = passwordmessages.join(', ')

    let emailmessages = []

    if (emailInp.value === '' || emailInp.value == null) {
        emailmessages.push('E-mail gerekli')
    }
    if (!emailInp.value.includes('@')){
        emailmessages.push('E-mailinizde @ işareti olması gerekiyor.')

    }
    emailError.innerHTML = emailmessages.join(', ')
    


    let checkboxmessages = []
    if (checkboxInp.checked == false){
        checkboxmessages.push('Lütfen okuyup anladığınızı onaylayın.')     
    }
    checkboxError.innerHTML = checkboxmessages.join (', ')





    e.preventDefault()
})