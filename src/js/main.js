import 'normalize.css';

import '../scss/main.scss';



let size = document.querySelectorAll(".main__size");
console.log(size);

for (const sizes of size) {
    sizes.addEventListener("click", () => {
        if(sizes.style.backgroundColor == "transparent"){
            sizes.style.backgroundColor = "#B2B5BB";
        }
        else{
            sizes.style.backgroundColor = "transparent";
        }
    });
}

let q1 = document.getElementById("question1");
q1.style.display = "none";
let plus = document.getElementById("plus1");
plus.onclick = function(){
    if(q1.style.display == "none"){
        q1.style.display = "block";
        plus.className  = "question__btn question__btn_close";
    }
    else{
        q1.style.display = "none";
        plus.className  = "question__btn";
    }
    
}
let q2 = document.getElementById("question2");
q2.style.display = "none";
let plus2 = document.getElementById("plus2");
plus2.onclick = function(){
    if(q2.style.display == "none"){
        q2.style.display = "block";
        plus2.className  = "question__btn question__btn_close";
    }
    else{
        q2.style.display = "none";
        plus2.className  = "question__btn";
    }
    
}

// function showQ(){
//     q1.style.display = "block";
// }