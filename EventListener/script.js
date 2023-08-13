// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// callback function
// grandparent.addEventListener('click', e => {
//     console.log(e.target)
// })

// //capturing vs bubbling
// //capturing goes from outside in
// //bubbling goes from inside out
// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Capture")
// }, {capture:true})

// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Bubble")
// })

// parent.addEventListener("click", e => {
//     e.stopPropagation()
//     console.log("Parent Capture")
// }, {capture:true})

// parent.addEventListener("click", e => {
//     console.log("Parent Bubble")
// })

// child.addEventListener("click", e => {
//     console.log("Child Capture")
// }, {capture:true})

// child.addEventListener("click", e => {
//     console.log("Child Bubble")
// })

// document.addEventListener("click", e => {
//     console.log("Document Capture")
// }, {capture:true})

// document.addEventListener("click", e => {
//     console.log("Document Bubble")
// })




// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Bubble")
// })

// parent.addEventListener("click", printHi)

// setTimeout(() => {
//     parent.removeEventListener("click", printHi)
// }, 2000)

// child.addEventListener("click", e => {
//     console.log("Child Bubble")
// })

// function printHi(){
//     console.log("Hi")
// }



const divs = document.querySelectorAll('div')

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("hi")
//     })
// })

addGlobalEventListener("click", 'div', e => {
    console.log("hi")
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)