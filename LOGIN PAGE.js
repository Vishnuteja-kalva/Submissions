function validateLogin() {
    const username = document.getElementById('User').value;
    const password = document.getElementById('Pass').value;
   

    const correctUsername = 'Kvteja';
    const correctPassword = 'Teja';

    if (username === correctUsername && password === correctPassword) {
        window.location.href ="Success.html";
        return false;
    } else {
        window.alert('Invalid username or password');
        window.location.href ="LOGIN PAGE.html";
    }
}
function Show(){
    var x = document.getElementById("Pass");
    if(x.type==="password")
    {
        x.type = "text";
    }
    else{
        x.type="password";
    }
}