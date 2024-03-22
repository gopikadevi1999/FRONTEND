const validationEmail = ({email, setEmailError}) => {
    const emailError = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailError)
    ? setEmailError('Email is not valid')
    : setEmailError('');
}

//password
const validationPassword = ({password, setPasswordError}) => {
    const passwordError = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return password && !password.match(passwordError)
    ? setPasswordError('Password is not valid')
    : setPasswordError('');
}

const validationName = ({name, setNameError}) => {
   const nameError = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
   return name && !name.match(nameError)
   ? setNameError('Name is not valid')
   : setNameError('');
}

//phone
const validationPhone = ({phone, setPhoneError}) => {
    const phoneError = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phone && !phone.match(phoneError)
    ? setPhoneError('Phone Number is not valid')
    : setPhoneError('');
}

//message
const validationMessage = ({message, setMessageError}) => {
    const messageError = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return message && !message.match(messageError)
    ? setMessageError('Message is not valid')
    : setMessageError('');
}


export {
    validationEmail,
    validationName,
    validationPhone,
    validationMessage,
    validationPassword
} 