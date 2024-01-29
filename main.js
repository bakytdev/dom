// let block = document.querySelector('.block');
//
// block.addEventListener('click', () => {
//     console.log("click")
//     if (block.style.background === '') {
//         block.style.background = 'red'
//     } else {
//         block.style.background = ''
//     }
// })


// let block = document.querySelectorAll('.block');

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'pink',
//     'white',
//     'black'
// ];

// console.log(colors[2])
// console.log(colors[Math.floor(Math.random() * colors.length)])
// console.log(Math.floor(Math.random() * 10))

// block.forEach((el) => {
//     el.addEventListener('click', () => {
//         el.style.background = colors[Math.floor(Math.random() * colors.length)]
//     })
// })

let name = document.querySelector('.name'),
    input = document.querySelector('.input'),
    btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
    name.innerText += input.value
    input.value = ''
})

