// Open up Menu Tray on Mobile
document.querySelector('.icon').addEventListener('click', () => {
    document.querySelector('.links').style.width = '250px';
});

// Close Menu Tray on Mobile
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.links').style.width = '0';
});

// Open Sub Menu Link
(function (){
    let subMenu = document.getElementById('programme');
    let subLinks = document.getElementById('programme-link');

    subMenu.addEventListener('click', () => {
        subLinks.classList.toggle('sub-active');
    })

    // document.querySelector('#programme').addEventListener('click', () => {
    //     document.querySelector('#programme-link').style.display = 'block';
    // });
})();


// Slider Carousel Function
let slideIndex = 1;

let plusSlides = () => {
    showSlides(slideIndex += n);
}


let showSlides = (n) => {
    let slides = document.getElementsByClassName('slides');

let i;
if( n > 1) {sliderIndex = 1};
if(n < 1) {sliderIndex.slides.lenght};
for(i = 0; i < slides.length; i++){
    slides[i] = style.display = 'none';

}

}
