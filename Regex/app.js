// regex

function submitEmail(inText) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById(inText).value;
    if (re.test(String(email).toLowerCase())) {
        alert("Email is valid  : " + email);
    } else {
        alert("Email is not valid  :  " + email);
    }
}
