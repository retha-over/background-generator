    /* Rethabile Masimene */

    "use strict";

    let color1 = document.getElementById("color1");
    let color2 = document.getElementById("color2");
    //let color2 = document.querySelector(".color2"); //if we used a class instead of an id
    let cssOut = document.querySelector("h3");
    let body = document.getElementById("bodygradient");


    function defaultColors() {
        body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        cssOut.textContent = body.style.backgroundImage;
    }

    body.onload = defaultColors;
    //body.addEventListener("load", defaultColors); //why doesn't it work????

    function changeColor() {
        //change the CSS style of the body background
        if (this === color1)
            body.style.backgroundImage = `linear-gradient(to right, ${this.value}, ${color2.value})`;
        else if (this === color2)
            body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${this.value})`;

        cssOut.textContent = body.style.backgroundImage;
        //cssOut.innerHTML = body.style.backgroundImage; //same as
    }

    color1.addEventListener("input", changeColor);
    color2.addEventListener("input", changeColor);