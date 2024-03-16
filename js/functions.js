const SCORES = 'scores'
const button = document.querySelector('#button')
const start = document.querySelector('#start')
const result = document.querySelector('#printReactionTime')
const playagain = document.querySelector('#playagain')
let scores = JSON.parse(localStorage.getItem(SCORES)) || []
let reactionTime = 0

const newGame = () => {
  start.innerHTML = "Aloita"
  start.style.display = 'block'
  button.style.backgroundColor = ""
  info.style.display = 'none'
  playagain.style.display = 'none'
}

newGame()

start.addEventListener('click', () => {
  button.style.backgroundColor = "rgb(171, 57, 57)"
  info.innerHTML = "Paina, kun väri muuttuu vihreäksi"
  info.style.display = 'block'
  start.style.display = 'none'
  button.style.cursor = 'pointer'
  createdTime = Date.now()
  let randomtime = Math.floor(Math.random() * 5999) + 1000

  setTimeout(() => {
    button.style.backgroundColor = "rgb(43, 202, 74)"
    info.innerHTML = "Nyt!"

    button.addEventListener('click', () => {
      clickedTime = Date.now()
      reactionTime = (clickedTime - (createdTime + randomtime)) / 1000
      const newScore = reactionTime
      scores.push(newScore)
      console.log(scores)

      scores.sort((a, b) => a - b) //Järjestää paremmuusjärjestykseen
      if (scores.length >= 10) { // Tallennetaan top-10
        scores = scores.slice(0, 10)
      }

      localStorage.setItem(SCORES, JSON.stringify(scores))

      info.innerHTML = "Reaktioaikasi on: " + reactionTime + " sekuntia"
      button.style.backgroundColor = "rgb(171, 171, 171)"
      playagain.style.display = 'block'
      playagain.innerHTML = "Pelaa uudelleen"
      start.style.display = 'none'
      button.style.cursor = 'default'

      playagain.addEventListener('click', () => {
        reactionTime = ""
        newGame()
      })
    }, { once: true })
  }, randomtime)
})