let userName=document.getElementById("userName")
let password=document.getElementById("password")
let flag;

 function validator(){

    if(userName.value==""){
        document.getElementById("usererror").innerHTML="User Name Is Empty!";
        flag=0;
     

    }else if(userName.value.length < 5){
        document.getElementById("usererror").innerHTML="User Name Require minimun 5 letters";
        flag=0;



    }else{
        document.getElementById("usererror").innerHTML="";
        flag=1;

    }
    
    if(password.value==""){
        document.getElementById("passworderror").innerHTML="Password Is Empty!";
        flag=0;

     

    }else{
        document.getElementById("passworderror").innerHTML="";
        flag=1;

    }

    if(flag==1){
        return true
    }else{
        return false
    }

   
}