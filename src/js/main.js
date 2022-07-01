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

