var logo = document.querySelector()
console.log(logo.attributes)
// first is the node
// let resultOne = getComputedStyle(first).fontSize;


const imageElement = document.querySelector('img')
console.log('BEFORE:',imageElement.getAttribute('height'))
imageElement.removeAttribute('height','200')
console.log('AFTER:', imageElement.getAttribute('height'))
