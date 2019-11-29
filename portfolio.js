
var modal= document.getElementById("myForm");
var btn= document.getElementById("mybtn");
var span= document.getElementsByClassName("close")[0];

btn.onclick= function(){
    modal.style.display="block";
}
span.onclick= function(){
    modal.style.display="none";
}
window.onclick= function(event){
    if(event.target== this.modal){
        this.modal.style.display="none";
    }
}
function textshow(){
    var write=document.getElementById("name").value;
    document.getElementById("hi").innerHTML="Hi" + " " + write;
}

// var write=document.getElementById("name").value;
// var show= document.getElementById("hi");

// let textshow= function(){
//     show.innerHTML= "hi"+ write;
// }

// write.addEventListener("input",textshow);