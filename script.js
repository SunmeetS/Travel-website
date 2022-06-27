let manali = document.querySelectorAll('[class="swiper-wrapper"]>div')
let manaliObj = {Destination: "Manali"}
let input = document.querySelector('.jYtkWQ')
let cross = document.querySelector('.contact-popupstyle__Cross-ute4p2-6')

manali.forEach((ele) => {
    ele.addEventListener('click', function () {
        input.style.display = "flex"
    })
    cross.addEventListener('click',()=>{
        input.style.display = "none"
    })

})

