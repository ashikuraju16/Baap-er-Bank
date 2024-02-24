document.getElementById('submit-btn').addEventListener('click', function(){
    const inputEmailField = document.getElementById('email-input');
    const email = inputEmailField.value;

    const inputPasswordField = document.getElementById('password-input');
    const password = inputPasswordField.value;

    // console.log(inputEmail,inputPassword);
  
if (email === 'Bangladesh@1971.com' && password === 'Secret@1971.com') {
    window.location.href = 'bank.html';
}
else{
    alert('you forget your password looooolllllllllllllllll');
}
})