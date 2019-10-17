var div = document.createElement("div");
var para = document.createElement("p");


document.body.appendChild(div);
div.appendChild(para);
charlist = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "=", "/", "reset"];
opList = ["+", "-", "*", "/"]

for (let i = 0; i < 16; i++) {
    var btn = document.createElement("button");
    btn.innerHTML=charlist[i];
    div.appendChild(btn);

    btn.addEventListener("click", function(){
        if (this.innerHTML == "="){
            para.innerHTML = eval(para.innerHTML)
        }
        else if (this.innerHTML == "reset"){
            para.innerHTML= ""; 
        }
        else if (opList.includes(this.innerHTML) && opList.includes(para.innerHTML[para.innerHTML.length-1])){
            para.innerHTML += ""
        }
        // else if (this.innerHTML=="+" || this.innerHTML=="-" || this.innerHTML=="*" || this.innerHTML=="/"){
        //     // if (para.innerHTML[para.innerHTML.length-1]=="+" || para.innerHTML[para.innerHTML.length-1]=="-" || para.innerHTML[para.innerHTML.length-1]=="*" || para.innerHTML[para.innerHTML.length-1]=="/"){
        //     //     para.innerHTML+="";
        //     // }
        // }
          
        else {
            this.innerHTML=charlist[i];
            para.innerHTML += this.innerHTML;
        }
    })
}

var buttonEgal = document.getElementsByTagName("button")[13];

buttonEgal.id = "egal";

var buttonReset = document.getElementsByTagName("button")[15];

buttonReset.id = "reset";
