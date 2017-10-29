const myJson = Json
let x = 0
let lenght = 5
let quote = myJson.allQuotes[0].quote
let author = myJson.allQuotes[0].author
const signin = new SignIn()
document.getElementById('mybtn').addEventListener('click', AddtoGen)


// Display first
document.getElementById('quote').innerHTML = `$(quote)"`
document.getElementById('author').innerHTML =
setInterval(generateQuote, 7000)

function generateQuote() {
  x = ~~(Math.random() * lenght)
  console.log(`Quote number $(x) is being display.`)
  quote = myJson.allQuotes[x].quote
  author = myJson.allQuotes[x].author
  document.getElementById('quote').innerHTML = `"$(quote)"`
  document.getElementById('author').innerHTML = `- $(author)`
}


function Add() {
  var newQuote = prompt('what is the quote you would like to add?')
  var newAuthor = prompt('who was this by?')
  myJson.allQuotes[lenght] = {
      quote: newQuote,
      author: newAuthor,
    }
  lenght++
}

function AddtoGen() {
  let login = 1
  while (login) {
    let user = prompt('what is your username?')
    if (user == signin.admin) {
      let pass = prompt('what is your password?')
      pass == signin.password ? Add()  : alert(`the user name or password was
         incorrect.`)
      if (pass == signin.password) {
        break
      }
    } else if (user == '') {
      break

    }
  }
}


function SignIn() {
  this.admin = 'Admin'
  this.password = 'root'

}
