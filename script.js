let inputForms = document.querySelectorAll('.NyXXA')
let database = {}
let submitBtn = document.querySelector("input[type='submit']")
for (let i = 0; i<inputForms.length; i++){
    
    let inputForm = inputForms[i];
    let word = ""
    inputForm.addEventListener('keyup',(e)=>{
        word=e.target.value
        console.log(word)
        let name = inputForm.name
        database[name] = word
        console.log(database)
    })
    let arr = [];
    arr.push(database)
    submitBtn.addEventListener('click',()=>{
        window.open(`mailto:renusonykabeer@gmail.com?subject=subject&body=${database}`)
    })
}

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


