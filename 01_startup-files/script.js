const $inputName = document.querySelector('#name')
const $selectJob = document.querySelector('#title')
const $inputOtherJob = document.querySelector('#other-title')
const $designSelect = document.querySelector('#design')

const $punsOption = document.querySelectorAll('.puns')
const $heartOption = document.querySelectorAll('.heart')
const $selectColor = document.querySelector('.select-colors')

document.addEventListener('DOMContentLoaded', function(){
    $inputName.focus()
}) 

$selectJob.addEventListener('change', function() {
    if($selectJob.value === "other"){
        $inputOtherJob.style.display = "initial"
    }else{
        $inputOtherJob.style.display = "none"
    }
});


$designSelect.addEventListener('change', function(e) {
    const designValue = e.target.value;
    
    if (designValue === "js puns") {
        $selectColor.classList.remove('invisible');
        for (let i = 0; i < $heartOption.length; i++) {
            $heartOption[i].classList.add('invisible');
        }
        for (let i = 0; i < $punsOption.length; i++) {
            $punsOption[i].classList.remove('invisible');
        }
    } else if (designValue === "heart js") {
        $selectColor.classList.remove('invisible');
        for (let i = 0; i < $heartOption.length; i++) {
            $heartOption[i].classList.remove('invisible');
        }
        for (let i = 0; i < $punsOption.length; i++) {
            $punsOption[i].classList.add('invisible');
        }
    } else {
        $selectColor.classList.add("invisible");
    }
});