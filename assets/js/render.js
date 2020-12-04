const form = document.querySelector('.control')
const textArea = document.querySelector('.textarea')
const display = document.getElementById('display')

form.addEventListener('submit', getInputText)
display.addEventListener('click', removeComment)

function getInputText(event) {
  event.preventDefault()
  const inputText = textArea.value
  renderComment(inputText)
  addToLocalStorage(inputText)
  textArea.value = ''
}

function renderComment(text) {
  if(text.trim() !== '') {
    const comment = `
  <div class="display-item">
        <div data-text>${text}</div>
        <div class="close">&times;</div>
      </div>
  `
  display.insertAdjacentHTML('beforeend', comment)
  }
}

function removeComment(event) {
  const parent = event.target.parentNode
  event.preventDefault()
  const closeBtn = event.target.classList.contains('close')
  if (closeBtn) {
  parent.remove()
  const message = parent.querySelector('[data-text]').innerHTML
  removeFromLocalStorage(message)
  }
}