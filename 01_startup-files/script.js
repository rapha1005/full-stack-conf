const $inputName = document.querySelector('#name')
const $selectJob = document.querySelector('#title')
const $inputOtherJob = document.querySelector('#other-title')
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