let $ = document

const inputElem = $.querySelector('input')
const spanElem = $.querySelector('.counter')
const inputMaxLength = inputElem.getAttribute('maxlength')

inputElem.addEventListener('keyup', function () {
    spanElem.innerHTML = inputMaxLength - inputElem.value.length
})
