let btnRight = document.querySelectorAll('.btn-right')[0];
let btnLeft = document.querySelectorAll('.btn-left')[0];
let firstImg = document.querySelectorAll('.first-img')[0];
let secondImg = document.querySelectorAll('.second-img')[0];
let menuBtn = document.querySelectorAll('#menu')[0];
let closeBtn = document.querySelectorAll('#close')[0];
let horMenu = document.querySelectorAll('.nav-horison')[0];
let sliderState = false;


if (btnRight !== undefined){
    btnRight.addEventListener('click', () =>{
        if (sliderState === false){
            firstImg.style.left = '-100%';
            secondImg.style.left = '0';
            sliderState = true;
        }else{
            firstImg.style.left = '0';
            secondImg.style.left = '100%';
            sliderState = false;
        }
    })
}

if (btnLeft !== undefined){
    btnLeft.addEventListener('click', () =>{
        if (sliderState === true){
            firstImg.style.left = '0';
            secondImg.style.left = '100%';
            sliderState = false;
        }else{
            firstImg.style.left = '-100%';
            secondImg.style.left = '0';
            sliderState = true;
        }
    })
}

menuBtn.addEventListener('click', () =>{
    horMenu.style.height = '292px';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    horMenu.style.height = '0';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})



