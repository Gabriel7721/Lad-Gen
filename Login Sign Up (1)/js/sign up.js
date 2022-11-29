function checksubmit(){
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm = document.getElementById("confirm").value;
        var phone = document.getElementById("phone").value;
        if(username  && phone && email && password && confirm){
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                html: 'Login Success'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href="./login.html"
            }
        })
    }
};