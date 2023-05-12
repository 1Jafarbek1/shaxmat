const shashkaBlack = document.querySelector(".shashkaBlack");
let x = 0;
let y =0 ;
console.log(x, y);

document.addEventListener('keydown', (el) => {
    let value = el.key;
    if (value == "d") {
        x++;
        if (x >= 7) {
            x = 7;
        }
        shashkaBlack.style.transform = `translate(${x * 80}px, ${y * 80}px)`;
    } else if (value == "a") {
        x--;
        if (x <= 0) {
            x = 0;
        }
        shashkaBlack.style.transform = `translate(${x * 80}px, ${y * 80}px)`;
    }else if (value == "s") {
        y++;
        if (x >= 430) {
            y = 430;
        }
        shashkaBlack.style.transform = `translate(${x *80}px, ${y *80}px)`;
    }else if (value == "w") {
        y--;
        if (y <= 0){
        y = 0;
    }
    shashkaBlack.style.transform = `translate(${x *80}px, ${y *80}px)`
    }

});

// white form


const shashkaWhite = document.querySelector(".shashkaWhite");
let ox = 0;
let oy = 0;
console.log(ox, oy);

document.addEventListener('keydown', (ell) => {
    let value = ell.key;
    if (value == "k") {
        ox++;
        if (ox >= 8) {
            ox = 6;
        }
        shashkaWhite.style.transform = `translate(${ox * 80}px, ${oy * 80}px)`;
    } else if (value == "h") {
        ox--;
        if (ox <= -1) {
            ox = -1;
        }
        shashkaWhite.style.transform = `translate(${ox * 80}px, ${oy * 80}px)`;
    }else if (value == "j") {
        oy++;
        if (oy >= 43) {
            oy = 43;
        }
        shashkaWhite.style.transform = `translate(${ox *80}px, ${oy*80}px)`;
    }else if (value == "u") {
        oy--;
        if (oy <= 0){
        oy = 0;
    }
    shashkaWhite.style.transform = `translate(${ox *80}px, ${oy*80}px)`
    }

});