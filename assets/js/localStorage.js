function addToLocalStorage(message) {
  let messages = getDataFromLocalStorage() || []
  
  if (message !== '') {
    messages.push(message)
  }
   
  const messagesJSON = JSON.stringify(messages)
  localStorage.setItem('comments', messagesJSON)
}

function getDataFromLocalStorage() {
  const commentsJSON = localStorage.getItem('comments')
  if (commentsJSON) {
    const comments = JSON.parse(commentsJSON)
    return comments
  }
}

function removeFromLocalStorage(item) {
  let messages = getDataFromLocalStorage()
  messages.forEach((m,i) => {
    if(m === item) {
      messages.splice(i)
    } 
  })

  const deleteMessages = JSON.stringify(messages)
  localStorage.setItem('comments', deleteMessages)
}
