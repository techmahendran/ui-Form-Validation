let fname = document.querySelector('.name')
let lname = document.querySelector('.lname')
let input = document.querySelector('.einput')
let item = document.querySelector('#item')
let add = document.querySelector('#add')


let btn = document.querySelector('#btn')

btn.addEventListener('click', handeClick)

function handeClick(e) {
    e.preventDefault();
    // fname.classList.add('box')
    if (fname.value === '' || lname.value === '') {
        item.classList.add('error')
        item.innerHTML = 'Please enter the fileds'

        setTimeout(() => item.remove(),3000)
    
    } else {
        let para = document.createElement('p')
        para.appendChild(document.createTextNode(`${fname.value} : ${lname.value} : ${input.value}`))
        add.appendChild(para)
    }
}
