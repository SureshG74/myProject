// First Carousel
const track1 = document.getElementById('carousel1-track');
const slides1 = Array.from(track1.children);
const prevButton1 = document.getElementById('prev1');
const nextButton1 = document.getElementById('next1');
let currentIndex1 = 0;

function updateCarousel1() {
    track1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

prevButton1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 === 0) ? slides1.length - 1 : currentIndex1 - 1;
    updateCarousel1();
});

nextButton1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 === slides1.length - 1) ? 0 : currentIndex1 + 1;
    updateCarousel1();
});

// Second Carousel
const track2 = document.getElementById('carousel2-track');
const slides2 = Array.from(track2.children);
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
let currentIndex2 = 0;

function updateCarousel2() {
    track2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

prevButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 === 0) ? slides2.length - 1 : currentIndex2 - 1;
    updateCarousel2();
});

nextButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 === slides2.length - 1) ? 0 : currentIndex2 + 1;
    updateCarousel2();
});

// Third Carousel
const track3 = document.getElementById('carousel3-track');
const slides3 = Array.from(track3.children);
const prevButton3 = document.getElementById('prev3');
const nextButton3 = document.getElementById('next3');
let currentIndex3 = 0;

function updateCarousel3() {
    track3.style.transform = `translateX(-${currentIndex3* 100}%)`;
}

prevButton3.addEventListener('click', () => {
    currentIndex3= (currentIndex3 === 0) ? slides3.length - 1 : currentIndex3 - 1;
    updateCarousel3();
});

nextButton3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 === slides3.length - 1) ? 0 : currentIndex3 + 1;
    updateCarousel3();
});
//fourth Carusel
const track4 = document.getElementById('carousel4-track');
const slides4 = Array.from(track4.children);
const prevButton4 = document.getElementById('prev4');
const nextButton4 = document.getElementById('next4');
let currentIndex4 = 0;

function updateCarousel4() {
    track4.style.transform = `translateX(-${currentIndex4 * 100}%)`;
}

prevButton4.addEventListener('click', () => {
    currentIndex4 = (currentIndex4 === 0) ? slides4.length - 1 : currentIndex4 - 1;
    updateCarousel4();
});

nextButton4.addEventListener('click', () => {
    currentIndex4 = (currentIndex4 === slides4.length - 1) ? 0 : currentIndex4 + 1;
    updateCarousel4();
});





let thumbnail = document.getElementById('thumbnail');

        thumbnail.addEventListener('click', () => {
            let newTab = window.open();
            newTab.document.write('<video src="videos/saalar.mp4" width="1000px" controls autoplay></video>');
        });
let thumbnail1 = document.getElementById('thumbnail1');

        thumbnail1.addEventListener('click', () => {
            thumbnail1.classList.add('clicked');
            let newTab = window.open();
            newTab.document.write('<video src="videos/Kalki.mp4" width="1000px" controls autoplay></video>');
        });
let thumbnail2 = document.getElementById('thumbnail2');

        thumbnail2.addEventListener('click', () => {
            thumbnail.classList.add('clicked');
            let newTab = window.open();
            newTab.document.write('<video src="videos/hanuman.mp4" width="1000px" controls autoplay></video>');
        });
let thumbnail3 = document.getElementById('thumbnail3');

        thumbnail3.addEventListener('click', () => {
            thumbnail3.classList.add('clicked');
            let newTab = window.open();
            newTab.document.write('<video src="videos/Animal.mp4" width="1000px" controls autoplay></video>');
        });

let thumbnail4 = document.getElementById('thumbnail4');

        thumbnail4.addEventListener('click', () => {
            thumbnail4.classList.add('clicked');
            let newTab = window.open();
            newTab.document.write('<video src="videos/HINanna.mp4" width="1000px" controls autoplay></video>');
        });