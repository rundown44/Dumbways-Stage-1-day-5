function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


if (name == ""){
    return alert("Name cannot be empty")
} else if(email == ""){
    return alert("Please type your email")
} else if (phone == ""){
    return alert("Please type your number")
} else if(subject == ""){
    return alert("Please choose one")
} else if(message == ""){
    return alert("Please enter your message")
};

const destination = "aarifaziz77@gmail.com"
let a = document.createElement("a")
a.href = `mailto:${destination}?subject=${subject}&body= Hai! My name is ${name}, ${subject} ASAP. You can reach me at ${phone} or ${email}. PS ${message}`
a.click();

    let data = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    console.log(data);
}