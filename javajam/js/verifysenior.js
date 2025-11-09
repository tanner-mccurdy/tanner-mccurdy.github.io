var age;

age = prompt("What's Your Age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Old People!" 
    document.getElementById('verify').style.color = 'red';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "You're Young!"
}

document.getElementById("verify").innerHTML = output;