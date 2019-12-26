function alrt(){
//  var userValue = document.getElementById("a").value;
//     // var b = document.getElementById("b").value;

//     var namePattern="^[A-Za-z]+$"
//     // document.getElementById("image").src = "https://images-na.ssl-images-amazon.com/images/I/91cy-FkSK6L._SX355_.jpg"

//     if(!userValue.match(namePattern))
//     document.getElementById("errorname").innerHTML="Name should be in alphabets"
//     else
//     document.getElementById("errorname").innerHTML=""
var ele =document.getElementById("stat").value
if(ele == "NONE"){
document.getElementById("err").innerHTML="Please Select a State"
return false
}
else 
{
    return true

}


    
}
