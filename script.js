let manali = document.querySelectorAll('[class="swiper-wrapper"]>div')

console.log(manali)


manali.forEach((ele) => {
    console.log(ele)
    ele.addEventListener('click', function () {
        window.open('./Iterinary/Manali-kasol-compressed (3).pdf');
    })
})