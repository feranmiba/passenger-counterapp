'use strict'
const btnSave = document.querySelector('.save-btn')
const incrementBtn = document.querySelector('.increment-btn')
const theNum = document.getElementById("count-el")
let firstBatch = 5
let count = 0

const incre =  function () {
    console.log('click'); 
  count += 1
   theNum.innerHTML = `${count}`
}
const save = function (){
    console.log(count);
    let countstr = count + '-'
    document.querySelector('.save-el').innerHTML += `${countstr}`
    count = 0
    theNum.innerHTML = `${count}`
}
incrementBtn.addEventListener('click', incre)
btnSave.addEventListener('click', save)
