const btn=document.getElementById("play");
btn.addEventListener("click",validateForm);
function validateForm(){
    var username = document.getElementById("username");
    var password=document.getElementById("password");
    if(btn.textContent=="P L A Y !")
    {
        var errorPass=document.getElementById("error_password");
        var errorName=document.getElementById("error_username");
        errorName.textContent="";
        errorPass.textContent="";
        let User={
            name : username.value,
            pass : password.value,
        }
        if(username.value=="")
        {
            var errorName=document.getElementById("error_username");
            errorName.textContent="NULLLLLL ???";
            errorName.style.color="red";
            return ;
        }
        let Account_decode=JSON.parse(localStorage.getItem(username.value));
        console.log(Account_decode);
        if(localStorage.getItem(username.value)==null)
        {
            var errorName=document.getElementById("error_username");
            errorName.textContent="Name doesn't exist!";
            errorName.style.color="red";
        }else
        {
            var errorName=document.getElementById("error_username");
            errorName.textContent="";
            if(password.value==null)
            {
                var errorPass=document.getElementById("error_password");
                errorPass.textContent="NULLLLLL ?????";
                errorPass.style.color="red";
                return ;
            }
            if(Account_decode.pass==password.value)
            {
                var errorPass=document.getElementById("error_password");
                errorPass.textContent="";
                LoginUserName=username.value;
                window.location.href="index.html";
            }else
            {
                var errorPass=document.getElementById("error_password");
                errorPass.textContent="Wrong Pass bro";
                errorPass.style.color="red";
            }
            
        }
    }else
    {
        
        var repeatPass=document.getElementById("repeat_pass");
        var errorPass=document.getElementById("error_password");
        var errorName=document.getElementById("error_username");
        errorName.textContent="";
        repeatPass.textContent="";
        errorPass.textContent="";
        let User={
            name : username.value,
            pass : password.value,

        }
        var errorName=document.getElementById("error_username");
        if(username.value=="")
            {
                var errorName=document.getElementById("error_username");
                errorName.textContent="NULLLLLL ???";
                errorName.style.color="red";
                return ;
            }
        if(localStorage.getItem(username.value)!=null)
        {
            var errorName=document.getElementById("error_username");
            errorName.textContent="Name has already taken!!!";
            errorName.style.color="red";
        }else
        {
            if(password.value=="")
                {
                    var errorName=document.getElementById("error_username");
                    errorName.textContent="NULLLLLL ???";
                    errorName.style.color="red";
                    return ;
                }
            var errorName=document.getElementById("error_username");
            errorName.textContent="";
            
            if(password.value==repeatPass.value)
            {
                var errorPass=document.getElementById("error_password");
                errorPass.textContent="";
                let Account_encode=JSON.stringify(User);
                localStorage.setItem(username.value,Account_encode);
                location.reload();
            }else
            {
                var errorPass=document.getElementById("error_password");
                errorPass.textContent="Pls try again, passwords don't match !!!";
                errorPass.style.color="red";
            }
        }
        
        
    }
}
//     let User={
//         name: username.value,
//         password: pass.value,
//     };
//     let Account_encode=JSON.stringify(User);
    
//     localStorage.setItem(username.value,Account_encode);
//     let Account_decode=JSON.parse(localStorage.getItem(username.value));
//     for(var i=0;i<localStorage.length;i++)
//     {
//         console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
//     }