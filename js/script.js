
// Вызов бокового меню в мобильном режиме при нажатии кнопки "бургера"
document.body.onclick = function (event) {
    let currentLeftValue = document.querySelector(".md-header-nav").style.left;
    // console.log(document.querySelector(".md-header-nav").style.left);
    // document.querySelector(".overlay-close-adaptive-menu").style.visibility = "visible";
    let className = event.target.classList.value;

    // Если клик был сделан на "бургер" или на его материнском элементе, то меню появляется
    if (className == "md-menu-burger" || className == "md-menu-burger-container") {
        if (currentLeftValue == "" || currentLeftValue == "-75%") {
            document.querySelector(".md-header-nav").style.left = "0%";
            document.querySelector(".overlay-close-adaptive-menu").style.visibility = "visible";
        } else {
            document.querySelector(".md-header-nav").style.left = "-75%";
        }
    }

    // если пользователь кликнул на само изображение внутри блока
    if (event.target.classList.contains("product-min")) {
        // remove .active class in .goods-img-min divs
        var allDivs = document.querySelectorAll(".product-img-min div");
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove("active");
        }

        document.getElementById("product-img-max").src = event.target.src;
        event.target.parentElement.classList.add("active");
    }

    // если пользователь кликнул на блок внутри которого изображение. Этот вариант нам тоже подходит.
    try {
        if (event.target.firstElementChild.classList.contains("product-min")) {
            var allDivs = document.querySelectorAll(".product-img-min div");
            for (var i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.remove("active");
            }
            document.getElementById("product-img-max").src = event.target.firstElementChild.src;
            event.target.classList.add("active");
        }
    } catch {}
};

// Скрытие бокового адаптивного меню при наведении за область меню
document.body.onmouseover = function(event){
    if(event.target.classList.contains("overlay-close-adaptive-menu")){
        // console.log(event.target.classList);
        // отключение затянеющего оверлея
        document.querySelector(".overlay-close-adaptive-menu").style.visibility = "hidden";
        // скрытие адаптивного меню
        document.querySelector(".md-header-nav").style.left = "-75%";
        currentLeftValue = "-75%";
    }
}



          
    


