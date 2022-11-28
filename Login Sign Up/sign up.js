function checksubmit(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var DOB = document.getElementById("DOB").value;
    if(!username){
        alert("input name")
    }else if(!email){
        alert("input email")
    }else if(!password){
        alert("input password")
    }else if(!confirm){
        alert("input confirm")
    }else if(!DOB){
        alert("input DOB")
    }else if(!/^([a-zA-z0-9]{3,})*\@([a-zA-z]{3,})*\.([a-zA-z]{3,})$/.test(email)){
        alert("plese input email in form (xxxx@xxx.xxx)");
        return false;
    }else{
        alert("login sucessfully");
        window.location.href = "login.html";
    }
    };