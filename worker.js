addEventListener('message', (event) => {
  const total = event.data
  for (let i = 0; total; i++) {
    postMessage(i)
  }
})
