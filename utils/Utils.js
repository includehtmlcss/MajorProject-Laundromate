function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Invalid Email")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("Password must be 9 characters")
    } else {
        setPasswordError("")
    }
}

function isValidPhoneNumber(value) {
    return value.length === 10;
}

function validatePhoneNumber(value, setPhoneNumberError) {
    if (value == "") {
        setPhoneNumberError("")
    }
    else if (isValidPhoneNumber(value)) {
        setPhoneNumberError("")
    }
    else {
        setPhoneNumberError("Invalid Number")
    }
}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword,
    isValidPhoneNumber,
    validatePhoneNumber
};

export default utils;