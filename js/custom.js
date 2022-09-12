var $doc = document;
var $rm_toggle = document.querySelector(".rm-toggle");
var $rm_pos = document.querySelector(".rm-pos");



function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function slideUp(el) {
    fade(el);
}
function slideDown(el) {
    unfade(el);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}




ready(function() {
    $rm_toggle.addEventListener('click', function () {
        var elem = $rm_toggle.value;
        if (elem === "ver mais") {
            //Stuff to do when btn is in the read more state
            $rm_toggle.innerHTML = 'ver menos <i class="bi bi-caret-up-fill"></i>';
            $rm_toggle.value = 'ver menos';
            slideDown($rm_pos);
            console.log($rm_pos);
        } else {
            //Stuff to do when btn is in the read less state
            $rm_toggle.innerHTML = 'ver mais <i class="bi bi-caret-down-fill"></i>';
            $rm_toggle.value = 'ver mais';
            slideUp($rm_pos);
            console.log($rm_pos);
        }

    }, false);
});



