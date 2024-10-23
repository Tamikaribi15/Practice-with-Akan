let nextDom = document.querySelector('.next');
let prevDom = document.querySelector('.prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.list');
let item = document.querySelectorAll('.item')
let thumbnailDom = document.querySelector('.thumbnail');

let timeRuning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
    showSlider('next')
}
prevDom.onclick = function() {
    showSlider('prev')
}

let runTimeOut;

let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

// function resetTimeAnimation() {
//     runningTime.style.animation = 'none'
//     runningTime.offsetHeight /* trigger reflow */
//     runningTime.style.animation = null 
//     runningTime.style.animation = 'runningTime 7s linear 1 forwards'
// }

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('carousel .thumnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        listItemDom.prepend(itemSlider[itemSlider.length - 1]);
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRuning)

    clearTimeout(runNextRun);
    runNextAuto = setTimeout(() => {
        nextDom.click()
    }, timeAutoNext)

    resetTimeAnimation() //Reset the running time animation
}

//Start the initial animation
resetTimeAnimation()
