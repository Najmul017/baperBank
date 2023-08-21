// Step 1: add event handeler with the submit field
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // Step 3: get password
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    // console.log(password);
    // Step 4 : verfy email and password
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
       alert('tui password mone kor');
    }
})