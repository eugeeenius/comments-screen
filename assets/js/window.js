document.addEventListener('DOMContentLoaded', onLoad)

function onLoad()  {
  const messages = getDataFromLocalStorage()

  if (messages) {
    messages.forEach(message => {
      renderComment(message)
    })
  }
}