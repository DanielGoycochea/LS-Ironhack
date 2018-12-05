var nickName = document.getElementById("nickName");
var userName= localStorage.getItem("nickName")
window.onload = function(){
    if (localStorage.getItem("nickName")!=null){
    nickName.innerHTML = nickName;
    }
}


function regitrarUsuario(){
    let userName = document.getElementById("userName").value;
    

    alert(userName)
    if(userName !=""){
        localStorage.setItem("nickName", userName)
        let userName= localStorage.getItem("nickName")
        

    }else{

        alert("Error")
    }
}

function clearLS(){
    nickName.innerHTML="";
    localStorage.clear
}